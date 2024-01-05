import { FaAngleLeft } from "react-icons/fa";

import "./Confirmation.css";

function Confirmation() {
  return (
    <div className="confirmation__container">
      <FaAngleLeft className="icon__back" />
      <div className="headers__content">
        <h1 className="book__header">Booking Details</h1>
      </div>
      <div className="stylist__container">
        <p>Your Hair stylist</p>
        <div className="user__container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
