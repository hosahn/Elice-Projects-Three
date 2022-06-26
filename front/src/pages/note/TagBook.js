import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as Api from '../../api';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faFileImage } from '@fortawesome/free-solid-svg-icons';
import TagEditCover from './TagEditCover';

const TagBook = (props) => {
  const [openEditCover, setOpenEditCover] = useState(false);
  const [bookColor, setBookColor] = useState();
  const [inputImage, setInputImage] = useState();
  const hiddenInput = useRef();
  const { openEditBtn, it, cancleBtn, clickSubmit, openSubmit } = props;

  useEffect(() => {
    setBookColor(it.color);
    setInputImage(it.image);
  }, []);

  useEffect(() => {
    if (cancleBtn) {
      setInputImage(it.image);
      setBookColor(it.color);
    }
  }, [cancleBtn]);

  useEffect(() => {
    if (openSubmit) {
      clickSubmit(bookColor, inputImage, it.id);
    }
  }, [openSubmit]);

  const openEdit = () => {
    setOpenEditCover((prev) => !prev);
  };

  const clickEditImage = () => {
    hiddenInput.current.click();
  };

  const clickBook = async (e) => {
    console.log(it.name);
    const res = await Api.get(`book/diarys?tag=${it.name}`);
    console.log(res.data);
  };

  const onChangeImage = async (event) => {
    const image = event.target.files[0];
    const imgName = image.name.replace(/(\s*)/g, '');
    const res = await Api.get(`upload/${imgName}`);
    await axios({
      method: 'put',
      url: res.data.url,
      data: image,
    });
    setInputImage(res.data.imageUrl);
  };

  return (
    <TagContainer color={bookColor} onClick={clickBook}>
      <ContenstContainer>
        <TitleWrapper>
          <span>#{it.name}</span>
        </TitleWrapper>
        <ImageWrapper image={inputImage}>
          {openEditBtn && (
            <>
              <ImgIconWrapper onClick={clickEditImage} image={inputImage}>
                <FontAwesomeIcon icon={faFileImage} className="fileImage" />
              </ImgIconWrapper>
              <input
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                name="profile_img"
                style={{ display: 'none' }}
                ref={hiddenInput}
                onChange={onChangeImage}
              />
            </>
          )}
        </ImageWrapper>
      </ContenstContainer>
      {openEditBtn && (
        <ColorIconWrapper onClick={openEdit}>
          <FontAwesomeIcon icon={faGear} className="user" />
        </ColorIconWrapper>
      )}
      {openEditCover && (
        <TagEditCover
          setBookColor={setBookColor}
          setOpenEditCover={setOpenEditCover}
        />
      )}
    </TagContainer>
  );
};

export default TagBook;

const ImgIconWrapper = styled.div`
  position: absolute;
  color: white;
  font-size: 20px;
  top: 70px;
  width: 10px;
  cursor: pointer;
  margin-left: 130px;
  :hover {
    color: #495057;
  }
`;

const ColorIconWrapper = styled.div`
  position: absolute;
  color: white;
  font-size: 20px;
  top: 210px;
  left: 40px;
  width: 10px;
  cursor: pointer;
  margin-left: 150px;
  :hover {
    color: #495057;
  }
`;

const TagContainer = styled.div`
width:220px;
height:280px;
transform: translate(-50%, -50%);
top:50%;
left: 50%;  
background: ${(prop) => prop.color};
border-radius: 20px 16px 12px 32px;
background-image: linear-gradient(to right,#4dabf7 48px,  50px, transparent 50px);  
}
:after{
    height: 35px;
    width: 200px; 
    bottom: 6px;
    right:0px;
    background: white;
    border-radius: 32px 4px 4px 32px;
    box-shadow: inset 4px 6px 0px 0px #E4E0CE;   // 수정 XX 
    background-image: linear-gradient(to bottom, transparent 6px, #E4E0CE 8px, transparent 8px, transparent 12px, #E4E0CE 12px, transparent 14px, transparent 18px,#E4E0CE 18px, transparent 20px, transparent 24px, #E4E0CE 24px, transparent 26px, transparent 30px, #E4E0CE 30px, transparent 32px, transparent 36px, #E4E0CE 36px, transparent 38px, transparent 42px, #E4E0CE 42px, transparent 44px, transparent 48px, #E4E0CE 48px, transparent 50px);     
}
:before{
    height: 10px;
    width: 160px; 
    right: 40px;
    top: 60px; 
    background:#4dabf7;
    border-radius: 20px;
}
`;

const ContenstContainer = styled.div`
  display: grid;
  place-content: center center;
  gap: 30px;
  margin-left: 20px;
`;

const ImageWrapper = styled.div`
  positon: relative;
  width: 160px;
  height: 100px;
  border-radius: 10px;
  margin-left: 13px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleWrapper = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  margin-top: 35px;
  text-align: center;
  padding-top: 6px;
  span {
    font-size: 20px;
    font-family: 'EliceDigitalBaeum';
  }
`;
