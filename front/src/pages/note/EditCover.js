import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../components/modal/Modal';
import * as Api from '../../api';

// 아직 미완성된 코드입니다.
const EditCover = (props) => {
  const { setBookColor, setOpenEditCover } = props;
  const [openPalette, setOpenPalette] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  //   const [reward, setReward] = useState(1);

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
  };

  return (
    <Modal>
      {/* reward.map((it) => <ColorWrapper color={it.color} />) */}
      <ColorContainer>
        {/* map */}
        {/* <ColorWrapper onClick={() => selectColor('#faa2c1')} value="#faa2c1" /> */}
        <ColorWrapper />
        <button onClick={() => setOpenEditCover(false)}>확인</button>
      </ColorContainer>
    </Modal>
  );
};

const ColorWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  //  background-color: ${(props) => props.color};
  background-color: pink;
  cursor: pointer;
`;

const ColorContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 50px;
`;

export default EditCover;
