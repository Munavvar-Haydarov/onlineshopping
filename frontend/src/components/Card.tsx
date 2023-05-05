import React from "react";
// import "./index.css";
import { Card } from "antd";
import { Link } from "react-router-dom";
interface cardProps {
  imgUrl: string;
  title: string;
  price: string;
}
const { Meta } = Card;

const CardView: React.FC<cardProps> = ({ imgUrl, title, price }) => (
  <Link to={"/DetailView"}>
    <Card
      hoverable
      // style={{ width: 240 }}
      className="border border-black rounded-[0px] hover:scale-[1.02] translate-all"
      cover={
        <img
          alt="example"
          src={`${imgUrl ? imgUrl : `img/comming-soon.png`}`}
          className="p-[1px]"
        />
      }
    >
      <Meta title={title} description={"price:" + price} />
    </Card>
  </Link>
);

export default CardView;
