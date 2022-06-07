import { atom, atomFamily } from 'recoil';

export const diaryItemState = atomFamily({
  key: 'diaryItemState',
  default: (id) => {
    return {
      id,
      title: '', // 제목
      tag: '', // 태그
      text: '', // 내용
    };
  },
});

export const diaryIdsState = atom({
  key: 'diaryIdsState',
  default: [],
});
