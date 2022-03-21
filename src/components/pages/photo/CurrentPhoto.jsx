import { useEffect, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import Button from "../../features/button/Button";
import Input from "../../features/input/Input";
import "./currentphoto.css";

const CurrentPhoto = ({
  selectedPhoto,
  onClickHandlerCancle,
  data,
  setData,
}) => {
  
  const [photoDetailes, setPhotoDetailes] = useState({
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  useEffect(() => {
    setPhotoDetailes(selectedPhoto);
  }, []);

  const handleChange = (e) => {
    setPhotoDetailes({ ...photoDetailes, [e.target.name]: e.target.value });
  };
  const editPhoto = () => {
    const newData = data.map((photo) => {
      if (photo === selectedPhoto) {
        // photo.title = photoDetailes.title;
        // photo.url = photoDetailes.url;
        // photo.id = photoDetailes.id;
        photo=photoDetailes;
      }
      return photo;
    });
    setData(newData);
  };
  const formHandleSubmit = (e) => {
    e.preventDefault();
    onClickHandlerCancle();
  };

  return (
    <>
      <Modal title="Edit detailes" visible={true}>
        <form onSubmit={formHandleSubmit}>
          <div>
            <h1>Photo {photoDetailes?.id}</h1>
            Id:{" "}
            <Input
              type={"number"}
              value={photoDetailes?.id}
              handleChange={handleChange}
              disabled={true}
            />
            Title:{" "}
            <Input
              type={"text"}
              name={"title"}
              placeholder={photoDetailes?.title}
              handleChange={handleChange}
            />
            Url:{" "}
            <Input
              type={"url"}
              name={"url"}
              placeholder={photoDetailes?.url}
              handleChange={handleChange}
            />
          </div>
            <Button
              onClickHandler={() => {
                editPhoto();
              }}
              type={"submit"}
              text={"Save"}
            />
          <Button
            onClickHandler={onClickHandlerCancle}
            type={"submit"}
            text={"Cancle"}
          />
        </form>
      </Modal>
    </>
  );
};
export default CurrentPhoto;