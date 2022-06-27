import React, { useState, useRef, useEffect } from 'react';
import * as Api from '../../api';
import axios from 'axios';
import {
  ImgIconWrapper,
  ColorIconWrapper,
  TagContainer,
  ContenstContainer,
  ImageWrapper,
  TitleWrapper,
} from '../../styles/BookStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faFileImage } from '@fortawesome/free-solid-svg-icons';
import TagEditCover from './TagEditCover';

const TagBook = (props) => {
  const [openEditCover, setOpenEditCover] = useState(false);
  const [bookColor, setBookColor] = useState();
  const [inputImage, setInputImage] = useState();
  const hiddenInput = useRef();
  const { openEditBtn, it, cancleBtn, openSubmit } = props;

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
      clickSubmit();
    }
  }, [openSubmit]);

  const clickSubmit = async () => {
    const res1 = await Api.post(`book/images/${it.id}`, {
      inputImage,
    });
    console.log(res1);

    await axios.all([
      Api.post(`book/images/${it.id}`, {
        inputImage,
      }),
      Api.post(`book/colors/${it.id}`, {
        bookColor,
      }),
    ]);
  };

  const openEdit = () => {
    setOpenEditCover((prev) => !prev);
  };

  const clickEditImage = () => {
    hiddenInput.current.click();
  };

  const clickBook = async (e) => {
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
