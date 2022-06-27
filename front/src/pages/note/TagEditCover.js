import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../components/modal/Modal';
import * as Api from '../../api';

const color = [
  { value: '#FFEC99', id: 1 },
  { value: '#A5D8FF', id: 2 },
  { value: '#FFD6A5', id: 3 },
  { value: '#BDB2FF', id: 4 },
  { value: '#FFADAD', id: 5 },
];

// 아직 미완성된 코드입니다.
const TagEditCover = (props) => {
  const { setBookColor, setOpenEditCover } = props;
  const [openPalette, setOpenPalette] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  //   const [reward, setReward] = useState(1);

  useEffect(() => {
    clickPalette();
  }, []);

  const clickPalette = async () => {
    try {
      const res = await Api.get('reward/user');
      console.log(res);
      setOpenPalette(true);
    } catch (err) {
      alert('err');
    }
  };

  const selectColor = (color) => {
    setBookColor(color);
    setOpenEditCover(false);
  };

  return (
    <Modal setOpen={setOpenEditCover}>
      <ColorContainer>
        {color.map((it) => (
          <ColorWrapper
            onClick={() => selectColor(it.value)}
            color={it.value}
          />
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
