import { useState } from "react";
import CardComponent from "../../features/card/CardComponent";
import Button from "../../features/button/Button";
import CurrentPhoto from "../photo/CurrentPhoto";
import "./home.css";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const Home = ({ data, setData }) => {
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [isDesplay, setIsDesplay] = useState(false);

  const clickToCurrentPhoto = (select) => {
    setCurrentPhoto(select);
    !isDesplay ? setIsDesplay(true) : setIsDesplay(false);
  };
  const clickToCancle = () => {
    !isDesplay ? setIsDesplay(true) : setIsDesplay(false);
  };
  const deletePhoto = ({ id }) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div>
      {isDesplay ? (
        <CurrentPhoto
          selectedPhoto={currentPhoto}
          onClickHandlerCancle={clickToCancle}
          data={data}
          setData={setData}
        />
      ) : (
        <div>
          <div className="header">
            <h1>PHOTO LIST</h1>
            <Link to={"/Photo-list/Photo-list/AddPhoto"}>
              <Button type={"button"} text={"Add new photo"}></Button>
            </Link>
          </div>
          {
          Object.keys(data).length === 0 ? (
          <Spin className="spin" size="large" />
      ):
          <div className="cards-container">
            {data?.map((photo, index) => {
              return (
                <div key={index}>
                  {" "}
                  <CardComponent
                    id={photo.id}
                    title={photo.title}
                    url={photo.url}
                    image={photo.url}
                    text={"Click here"}
                  />
                  <Button
                    type={"button"}
                    text={"Edit"}
                    onClickHandler={() => clickToCurrentPhoto(photo)}
                  />
                  <Button
                    type={"button"}
                    text={"Delete"}
                    onClickHandler={() => {
                      deletePhoto(photo);
                    }}
                  />
                </div>
              );
            })}
          </div>
  }  </div>
      )}
    </div>
  );
};
export default Home;
