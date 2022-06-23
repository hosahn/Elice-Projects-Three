import io
import json

from flask import Flask, request
import torch
from transformers import XLNetTokenizer
from kobert.pytorch_kobert import get_pytorch_kobert_model
from torch import nn
import numpy as np
from torch.utils.data import Dataset, DataLoader
from transformers import AdamW
import gluonnlp as nlp
from kobert_tokenizer import KoBERTTokenizer
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

tokenizer = KoBERTTokenizer.from_pretrained("skt/kobert-base-v1")
tok = tokenizer.tokenize
bertmodel, vocab = get_pytorch_kobert_model()
max_len = 64


class BERTDataset(Dataset):
  def __init__(self, dataset, sent_idx, label_idx, bert_tokenizer, vocab, max_len, pad, pair):
    transform = nlp.data.BERTSentenceTransform(bert_tokenizer, max_seq_length=max_len, vocab=vocab, pad=pad, pair=pair)
    
    self.sentences = [transform([i[sent_idx]]) for i in dataset]
    self.labels = [np.int32(i[label_idx]) for i in dataset]
  
  def __getitem__(self, i):
    return (self.sentences[i] + (self.labels[i], ))
  
  def __len__(self):
    return (len(self.labels))


class BERTClassifier(nn.Module):
  def __init__(self,
               bert,
               hidden_size = 768,
               num_classes = 7,  # 클래스 수 조정
               dr_rate = None,
               params = None):
    super(BERTClassifier, self).__init__()
    self.bert = bert
    self.dr_rate = dr_rate

    self.classifier = nn.Linear(hidden_size, num_classes)
    if dr_rate:
      self.dropout = nn.Dropout(p=dr_rate)

  def gen_attention_mask(self, token_ids, valid_length):
    attention_mask = torch.zeros_like(token_ids)
    for i, v in enumerate(valid_length):
      attention_mask[i][:v] = 1
    return attention_mask.float()

  def forward(self, token_ids):
    _, pooler = self.bert(input_ids = token_ids['input_ids'], token_type_ids = token_ids['token_type_ids'], attention_mask = token_ids['attention_mask'], return_dict=False)
    if self.dr_rate:
      out = self.dropout(pooler)
    return self.classifier(out)


model = BERTClassifier(bertmodel, dr_rate=0.5).to('cuda')
model.load_state_dict(torch.load('state_dict_model.pt'))


def prediction(predict_sentence):
#   print(predict_sentence)
  if type(predict_sentence) == str:
      data = [predict_sentence]
  else:
      data = predict_sentence

  token_inputs = tokenizer.batch_encode_plus(data, return_tensors='pt')
  token_inputs = {k: v.to('cuda') for k, v in token_inputs.items()}
  
#   print(token_inputs)
  model.eval()

  out = model(token_inputs)
#   print(out)

  test_eval = []
  logits = out[0].detach().cpu().numpy()

#   for i in out:
#     logits = i
#     logits = logits.detach().cpu().numpy()

#     test_eval.append("공포: {0}, 놀람: {1}, 분노: {2}, 슬픔: {3}, 중립: {4}, 행복: {5}, 혐오: {6}".format(logits[0], logits[1], logits[2], logits[3], logits[4], logits[5], logits[6]))
  
#   print(test_eval)
  output = np.argmax(logits)
  
  if output == 0:
    return "공포"
  elif output == 1:
    return "놀람"
  elif output == 2:
    return "분노"
  elif output == 3:
    return "슬픔"
  elif output == 4:
    return "중립"
  elif output == 5:
    return "행복"
  elif output == 6:
    return "혐오"
#   return "공포: {0}, 놀람: {1}, 분노: {2}, 슬픔: {3}, 중립: {4}, 행복: {5}, 혐오: {6}".format(logits[0], logits[1], logits[2], logits[3], logits[4], logits[5], logits[6])


@app.route('/')
def main_page():
    return "hello world!"


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        diary = request.get_json()
        print(diary['diary'])
        print(prediction(diary['diary']))
        return prediction(diary['diary'])

if __name__ == '__main__':
    app.run()
