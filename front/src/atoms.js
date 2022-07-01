import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: [],
});

export const challengeState = atom({
  key: 'challengeState',
  default: [],
});

export const randomListState = atom({
  key: 'randomListState',
  default: [],
});

export const emotionState = atom({
  key: 'emotionState',
  default: '',
});
