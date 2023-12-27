import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";

import "./AddCount.css";

function AddCount() {
  return (
    <div className="addCount__container">
      <div className="adultAndKids">
        <div className="adults structure">
          <div className="adults__text">
            <p className="bigText">Adults</p>
            <p className="smallText">Age 13+</p>
          </div>
          <div className="adultCounts">
            <AiOutlineMinusCircle className="icons__style" />
            <p className="increase__number">2</p>
            <IoAddCircleOutline className="icons__style" />
          </div>
        </div>
        <div className="children structure">
          <div className="adults__text">
            <p className="bigText">Children</p>
            <p className="smallText">Age 12-</p>
          </div>
          <div className="adultCounts">
            <AiOutlineMinusCircle className="icons__style" />
            <p className="increase__number">2</p>
            <IoAddCircleOutline className="icons__style" />
          </div>
        </div>
        <p className="descInfo">
          Specify the number of people coming for a trim
        </p>
      </div>
    </div>
  );
}

export default AddCount;
