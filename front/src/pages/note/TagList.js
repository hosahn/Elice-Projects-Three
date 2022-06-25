import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import EditCover from './EditCover';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faFileImage } from '@fortawesome/free-solid-svg-icons';
import * as Api from '../../api';

const TagList = () => {
  const [tagList, setTagList] = useState([]);
  const hiddenInput = useRef();
  const [bookColor, setBookColor] = useState('#ffec99');
  const [openEditBtn, setOpenEditBtn] = useState(false);
  const [openEditCover, setOpenEditCover] = useState(false);
  const [inputImage, setInputImage] = useState();

  const openEdit = () => {
    setOpenEditCover((prev) => !prev);
  };

  const clickEdit = () => {
    setOpenEditBtn((prev) => !prev);
  };

  useEffect(() => {
    console.log(inputImage);
  }, [inputImage]);

  const clickEditImage = () => {
    hiddenInput.current.click();
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
    <>
      <button onClick={clickEdit}>Reward</button>
      <TagContainer color={bookColor}>
        <TitleWrapper>
          <span>#여행</span>
        </TitleWrapper>
        <ImageWrapper image={inputImage}>
          {openEditBtn && (
            <>
              <ImgIconWrapper onClick={clickEditImage}>
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
        {openEditBtn && (
          <ColorIconWrapper onClick={openEdit}>
            <FontAwesomeIcon icon={faGear} className="user" />
          </ColorIconWrapper>
        )}
        {openEditCover && (
          <EditCover
            setBookColor={setBookColor}
            setOpenEditCover={setOpenEditCover}
          />
        )}
      </TagContainer>
    </>
  );
};

const ImgIconWrapper = styled.div`
  position: absolute;
  color: white;
  font-size: 20px;
  top: 70px;
  width: 10px;
  cursor: pointer;
  margin-left: 120px;
`;

const ColorIconWrapper = styled.div`
  position: absolute;
  color: #808080;
  font-size: 20px;
  top: 220px;
  width: 10px;
  cursor: pointer;
  margin-left: 150px;
  :hover {
    color: black;
  }
`;

const TagContainer = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  display: grid;
  place-items: center;
`;

const ImageWrapper = styled.div`
  positon: relative;
  width: 150px;
  height: 100px;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 25px;
`;

const TitleWrapper = styled.div`
  width: 140px;
  height: 40px;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  text-align: center;
  padding-top: 6px;
  span {
    font-size: 20px;
    font-family: 'EliceDigitalBaeum';
  }
`;

export default TagList;
