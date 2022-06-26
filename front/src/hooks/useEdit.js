import React, { useState } from 'react';

const useEdit = () => {
  const [openSubmit, setOpenSubmit] = useState(false);
  const [openEditBtn, setOpenEditBtn] = useState(false);
  const [cancleBtn, setCancleBtn] = useState(false);

  const checkType = (type) => {
    if (type === 'open') {
      console.log('편집버튼 누름');
      setOpenEditBtn((prev) => !prev);
      setCancleBtn(false);
      setOpenSubmit(false);
    } else if (type === 'submit') {
      console.log('편집 전송 누름');
      setOpenEditBtn((prev) => !prev);
      setCancleBtn(false);
      setOpenSubmit(true);
    } else if (type === 'cancle') {
      console.log('편집취소 누름');
      setOpenEditBtn((prev) => !prev);
      setCancleBtn(true);
      setOpenSubmit(false);
    }
  };

  return {
    openSubmit,
    openEditBtn,
    cancleBtn,
    checkType,
  };
};

export default useEdit;
