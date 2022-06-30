import { useState } from 'react';

const useEdit = () => {
  const [openSubmit, setOpenSubmit] = useState(false);
  const [openEditBtn, setOpenEditBtn] = useState(false);
  const [cancleBtn, setCancleBtn] = useState(false);

  const checkType = (type) => {
    if (type === 'open') {
      setOpenEditBtn((prev) => !prev);
      setCancleBtn(false);
      setOpenSubmit(false);
    } else if (type === 'submit') {
      setOpenEditBtn((prev) => !prev);
      setCancleBtn(false);
      setOpenSubmit(true);
    } else if (type === 'cancle') {
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
