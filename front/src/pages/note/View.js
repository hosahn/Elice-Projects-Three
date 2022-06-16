import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';
import * as Api from '../../api';

const ViewContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  margin-right: 200px;
  margin-left: 200px;
`;

const TiteWrap = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
  border-bottom: solid 2px #ced4da;
  display: flex;
  flex-direction: rows;
`;

const TagWrap = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
`;

const ContentWrapper = styled.div`
  min-height: 500px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-radius: 20px;
`;

const Title = styled.span`
  font-size: 40px;
  font-family: 'InfinitySans-RegularA1';
`;

const Tag = styled.span`
  font-size: 20px;
  font-family: 'EliceDigitalBaeum';
`;

const IconWrapper = styled.div`
  margin-left: 450px;
  font-size: 40px;
  color: #495057;
  cursor: pointer;
`;

const View = () => {
  const { state } = useLocation();
  const [diary, setDiary] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    getDiary();
  }, []);

  const getDiary = async () => {
    const res = await Api.get(`diary/${state}`);
    setDiary(res.data);
    setText(res.data.text);
  };

  return (
    <>
      <Nav />
      <ViewContainer>
        <TiteWrap>
          <Title>{diary.title}</Title>
          <IconWrapper>
            <FontAwesomeIcon icon={faFilePdf} className="user" />
          </IconWrapper>
        </TiteWrap>
        <TagWrap>
          <Tag>#{diary.tag}</Tag>
        </TagWrap>
      </ViewContainer>
    </>
  );
};

export default View;
