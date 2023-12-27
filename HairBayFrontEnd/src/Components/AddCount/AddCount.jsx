import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";

import "./AddCount.css";

function AddCount() {
  return (
    <div className="addCount__container">
      <div className="adultAndKids">
        <div className="adults">
          <div className="adults__text">
            <p>Adults</p>
            <p>Age 13+</p>
          </div>
          <div className="adultCounts">
            <AiOutlineMinusCircle className="icons__style" />
            <p className="increase__number">2</p>
            <IoAddCircleOutline className="icons__style" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCount;
