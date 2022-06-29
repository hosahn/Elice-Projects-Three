import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../components/modal/Modal';
import * as Api from '../../api';
import snackBar from '../../components/snackBar';

const TagEditCover = (props) => {
  const { setBookColor, setOpenEditCover } = props;
  const [openPalette, setOpenPalette] = useState(false);
  const [rewardColor, setRewardColor] = useState([]);

  useEffect(() => {
    clickPalette();
  }, []);

  const clickPalette = async () => {
    try {
      const res = await Api.get('reward/user');
      setRewardColor(res.data);
      setOpenPalette(true);
    } catch (err) {
      snackBar('error');
    }
  };

  const selectColor = (color) => {
    setBookColor(color);
    setOpenEditCover(false);
  };

  return (
    <Modal setOpen={setOpenEditCover}>
      <ColorContainer>
        {rewardColor.map((it) => (
          <ColorWrapper onClick={() => selectColor(it.value)} color={it} />
        ))}
      </ColorContainer>
    </Modal>
  );
};

const ColorWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ColorContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 50px;
`;

export default TagEditCover;
