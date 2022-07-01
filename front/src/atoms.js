import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: 'userState',
  default: [],
  effects_UNSTABLE: [persistAtom],
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
