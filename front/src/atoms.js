import { atom } from 'recoil';

export const titleState = atom({
  key: 'titleState',
  default: '',
});

export const textState = atom({
  key: 'textState',
  default: '',
});

export const tagState = atom({
  key: 'tagState',
  default: '',
});

export const writeState = atom({
  key: 'writeState',
  default: false,
});

export const userState = atom({
  key: 'userState',
  default: [],
});
