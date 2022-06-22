import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';

const TagList = () => {
  return (
    <>
      <TagContainer>
        <TitleWrapper>
          <span>#여행</span>
        </TitleWrapper>
        <ImageWrapper />
      </TagContainer>
    </>
  );
};

const TagContainer = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  background-color: #d0ebff;
  border-radius: 5px;
  display: grid;
  place-items: center;
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 100px;
  border-radius: 10px;
  background-image: url(${images.Travel});
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
