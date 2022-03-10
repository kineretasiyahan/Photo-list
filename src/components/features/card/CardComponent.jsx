import "./card.css";
import { Card } from "antd";
const { Meta } = Card;

const CardComponent = ({ id, image, title, url,text }) => {
  return (
    <div className="card">
      <Card
        id={id}
        title={id}
        hoverable
        cover={<img alt="example" src={image} style={{width:200,height:150,marginLeft:"auto",marginRight:"auto"}} />}
      >
        <Meta title={title} description={<a href={url}>{text}</a>} />
      </Card>
    </div>
  );

};
export default CardComponent;
