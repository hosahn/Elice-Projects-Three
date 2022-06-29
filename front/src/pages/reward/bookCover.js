import { useState, useEffect } from "react";
import * as Api from "../../api";
import RewardModal from "./rewardModal";
import Nav from "../../components/nav/Nav";
import Modal from "react-modal";

const TagPage = () => {
  const [bookColor, setBookColor] = useState(["blue"]);
  const [tagName, setTagName] = useState(["여행"]);
  const [bookImage, setBookImage] = useState([
    "https://png.pngtree.com/element_our/png/20181009/thai-cat-cream-tabby-sitting-png_131622.jpg",
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentBox, setCurrentBox] = useState("");
  const [currentBoxNr, setCurrentBoxNr] = useState(-1);
  //여기서 axios로 bookcolor, tagname, bookimage 받아오면 된다.

  const tagHandler = () => {
    //태그별로 모아보기 페이지로 이동, axios 요청
  };
  const buttonHandler = (i) => {
    setShowModal(true);
    setCurrentBox(tagName[i]);
    setCurrentBoxNr(i);
  };

  useEffect(() => {
    console.log(bookColor, bookImage);
  }, [bookColor, bookImage]);

  const renderBook = () => {
    const result = [];
    for (let i = 0; i < tagName.length; i++) {
      result.push(
        <div>
          <div
            id={i}
            onClick={tagHandler}
            style={{
              width: "300px",
              height: "300px",
              position: "relative",
              backgroundColor: `${bookColor[i]}`,
            }}
          >
            <h1>#{tagName[i]}</h1>
            <img
              src={bookImage}
              alt={i}
              style={{
                width: "120px",
                height: "120px",
              }}
            />
          </div>
          <button
            onClick={() => {
              buttonHandler(i);
            }}
          >
            색상 변경하기/이미지 변경하기
          </button>
        </div>
      );
    }
    return result;
  };

  if (tagName.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Nav />
      <h1>클릭해보세요</h1>
      {renderBook()}
      <Modal isOpen={showModal}>
        <RewardModal
          data={currentBox}
          show={setShowModal}
          changeUrl={setBookImage}
          changeColor={setBookColor}
          urlList={bookImage}
          colorList={bookColor}
          boxNr={currentBoxNr}
        ></RewardModal>
      </Modal>
    </>
  );
};

export default TagPage;
