import { useState, useEffect } from "react";
import * as Api from "../../api";
import styled from "styled-components";

export const ImageInput = styled.input`
  display: inline-flex;
  width: 30rem;
  height: 3rem;
  color: black;
  background: transparent;
  padding: 1rem;
  border: solid 1px #dbc7ff;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

export const ModalButton = styled.button`
  positon: absolute;
  left: 1500px;
  top: -800px;
`;

export const ColorButton = styled.button`
  positon: absolute;
  left: 800px;
  top: -400px;
`;

const RewardModal = (props) => {
  const keyword = props.data;
  const close = props.show;
  const changeImage = props.changeUrl;
  const changeColor = props.changeColor;
  const currentImage = props.urlList;
  const currentColor = props.colorList;
  const currentBoxNr = props.boxNr;

  const [currentUrl, setCurrentUrl] = useState("");
  const [userReward, setUserReward] = useState([]);
  const [colorName, setColorName] = useState(currentColor[currentBoxNr]);

  const requestHandler = async () => {
    const data = await Api.get("reward/user");
    setUserReward(data.data);
  };

  useEffect(() => {
    requestHandler();
  }, []);

  const colorChange = () => {
    //axios 요청, keyword의 color을 해당 color로 변경
    let copiedColorArray = [...currentColor];
    copiedColorArray[currentBoxNr] = colorName;
    changeColor(copiedColorArray);
    //이건 react실시간 변경코드
  };

  const colorSet = (color) => {
    setColorName(color);
  };

  const closeHandler = () => {
    close(false);
  };
  const submitHandler = (event) => {
    //axios 요청, keyword의 url을 해당 url로 변경
    event.preventDefault();
    let copiedImageArray = [...currentImage];
    copiedImageArray[currentBoxNr] = currentUrl;
    changeImage(copiedImageArray);
  };
  const handleChange = ({ target: { value } }) => {
    setCurrentUrl(value);
  };
  const renderBox = () => {
    const result = [];
    for (let i = 0; i < userReward.length; i++) {
      result.push(
        <div
          onClick={() => {
            colorSet(userReward[i]);
          }}
          style={{
            width: "300px",
            height: "300px",
            margin: "4px",
            backgroundColor: `${userReward[i]}`,
            float: "left",
          }}
        ></div>
      );
    }
    return result;
  };

  if (userReward.length === 0) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div
        style={{
          width: "1200px",
          height: "800px",
        }}
      >
        {renderBox()}
      </div>
      <ModalButton onClick={closeHandler}>모달창 닫기</ModalButton>
      <form onSubmit={submitHandler}>
        <ImageInput
          type="image_url"
          name="image_url"
          value={currentUrl}
          onChange={handleChange}
        ></ImageInput>

        <button type="submit">이미지 변경</button>
      </form>
      <ColorButton onClick={colorChange}>색상변경</ColorButton>
    </>
  );
};
export default RewardModal;
