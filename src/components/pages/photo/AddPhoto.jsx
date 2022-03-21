import { useState } from "react";
import Button from "../../features/button/Button";
import Input from "../../features/input/Input";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const AddPhoto = ({ data, setData }) => {
  const history = useHistory();
  const [newPhoto, setNewPhoto] = useState({
    albumId: uuidv4(),
    id: uuidv4(),
    title: "",
    url: "",
    thumbnailUrl: "",
  });

  const handleChange = (e) => {
    setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value });
  };
  const formHandleSubmit = (e) => {
    e.preventDefault();
    history.goBack();
  };
  const addNewPhoto = () => {
    data.map((photo) => {
      if (photo.title === newPhoto.title || photo.url === newPhoto.url) {
        alert("The title or url already exists");
        return;
      }
      setData([ ...data,newPhoto]);
    });
  };
  return (
    <div>
      <h1>New photo</h1>
      <form onSubmit={formHandleSubmit}>
        Album Id:
        <Input
          type={"number"}
          name={"albumId"}
          handleChange={handleChange}
          value={newPhoto?.albumId}
          placeholder={"Automatic input"}
          disabled={true}
        />
        Id:{" "}
        <Input
          type={"number"}
          name={"id"}
          handleChange={handleChange}
          value={newPhoto?.id}
          placeholder={"Automatic input"}
          disabled={true}
        />
        Title:
        <Input type={"text"} name={"title"} handleChange={handleChange} />
        Url:
        <Input type={"url"} name={"url"} handleChange={handleChange} />
        Thumbnail Url:
        <Input type={"url"} name={"thumbnailUrl"} handleChange={handleChange} />
        <Button type={"submit"} text={"Add"} onClickHandler={addNewPhoto} />
        <Link to={"/Photo-list"}>
        <Button type={"button"} text={"Cancle"} />
        </Link>
      </form>
    </div>
  );
};
export default AddPhoto;
