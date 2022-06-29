from transformers import BertForSequenceClassification, BertConfig, XLNetTokenizer
from kobert_tokenizer import KoBERTTokenizer
import torch
from transformers import TrainingArguments, Trainer
from datasets import load_metric

import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split


data = pd.read_csv('./data/sentiment_data_plus.csv')

label_encoder = LabelEncoder()
label_encoder.fit(data['Emotion'])
num_labels = len(label_encoder.classes_)

data['encoded_label'] = np.asarray(label_encoder.transform(data['Emotion']), dtype=np.int32)

target = data['encoded_label']
dataset = data.loc[:, ['Sentence', 'encoded_label']]

trainset, test_val_set = train_test_split(dataset,
                                    test_size=0.2,
                                    shuffle=True,
                                    random_state=42,
                                    stratify=target)

t_target = test_val_set['encoded_label']
testset, validset = train_test_split(test_val_set,
                                   test_size=0.5,
                                   shuffle=True,
                                   random_state=42,
                                   stratify=t_target)



tokenizer = KoBERTTokenizer.from_pretrained('skt/kobert-base-v1')
config = BertConfig.from_pretrained('skt/kobert-base-v1')
config.num_labels = num_labels
model = BertForSequenceClassification.from_pretrained('skt/kobert-base-v1', config=config)

device = torch.device('cuda') if torch.cuda.is_available() else torch.device('cpu')
model.to(device)


train_encodings = tokenizer(trainset['Sentence'].tolist(), truncation=True, padding=True, max_length=64, return_tensors="pt")
val_encodings = tokenizer(validset['Sentence'].tolist(), truncation=True, padding=True, max_length=64, return_tensors="pt")
test_encodings = tokenizer(testset['Sentence'].tolist(), truncation=True, padding=True, max_length=64, return_tensors="pt")


class Dataset(torch.utils.data.Dataset):
    def __init__(self, encodings, labels):
        self.encodings = encodings
        self.labels = labels

    def __getitem__(self, idx):
        item = {key: val[idx] for key, val in self.encodings.items()}
        item['labels'] = torch.tensor(self.labels[idx])
        return item

    def __len__(self):
        return len(self.labels)
    
train_dataset = Dataset(train_encodings, trainset['encoded_label'].tolist())
val_dataset = Dataset(val_encodings, validset['encoded_label'].tolist())
test_dataset = Dataset(test_encodings, testset['encoded_label'].tolist())


training_args = TrainingArguments(output_dir="test_trainer",
                                  evaluation_strategy="epoch",
                                  per_device_train_batch_size=64)


metric = load_metric("accuracy")

def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)


trainer = Trainer(model=model,
                  args=training_args,
                  train_dataset=train_dataset,
                  eval_dataset=val_dataset,
                  compute_metrics=compute_metrics)

trainer.train()