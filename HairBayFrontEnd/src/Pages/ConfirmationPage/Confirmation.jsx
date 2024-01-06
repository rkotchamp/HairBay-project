import profile from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";

import "./Confirmation.css";

function Confirmation() {
  return (
    <div className="confirmation__container">
      <div className="headers__content">
        <FaAngleLeft className="icon__back" />
        <h1 className="book__header">Booking Details</h1>
      </div>

      <div className="stylist__container">
        <p className="stylist__text">Your Hair stylist</p>
        <div className="user__container">
          <div className="confirm__avatar">
            <img
              src={profile}
              alt="user avatar"
              className="confirm__avatar__image"
            />
          </div>
          <div className="user__info">
            <p className="user__name">Benjamin Cutz</p>
            <p className="user__location">Manhattan, USA</p>
          </div>
        </div>
      </div>
      <div className="confirm__booking">
        <div className="dates__hours__edit info">
          <div className="dates__hours">
            <p>Date</p>
            <span>
              <p>Feb 12</p>
              <p>3 hours</p>
            </span>
          </div>
          <p>Edit</p>
        </div>
        <div className="clients info">
          <div className="dates__hours">
            <p>Date</p>
          </div>
          <p>Edit</p>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
