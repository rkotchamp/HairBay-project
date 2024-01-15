import { useContext } from "react";
import Button from "../../Components/Button/Button";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import UserContext from "../../Context/UserContext";

import "./Confirmation.css";

function Confirmation({ users }) {
  const { id } = useParams();
  const userConfirmed = users.find((u) => u.id === Number(id));
  const { user, setUsers } = useContext(UserContext);

  return (
    <div className="confirmation__container">
      <div className="headers__content">
        <Link to={`/profile/${id}`}>
          <FaAngleLeft className="icon__back" />
        </Link>
        <h1 className="book__header">Booking Details</h1>
      </div>

      <div className="stylist__container">
        <p className="stylist__text">Your Hair stylist</p>
        <div className="user__container">
          <div className="confirm__avatar">
            <img
              src={userConfirmed.avatar}
              alt="user avatar"
              className="confirm__avatar__image"
            />
          </div>
          <div className="user__info">
            <p className="user__name">{userConfirmed.fullName}</p>
            <p className="user__location">{userConfirmed.location}</p>
          </div>
        </div>
      </div>
      <div className="confirm__booking">
        <div className="dates__hours__edit info">
          <div className="dates__hours">
            <div className="date__text_layout">
              <p className="boldText">Date</p>
              <div className="date">
                <p className="smallTextConfirm">{user.date}</p>
                <p className="smallTextConfirm">3 hours</p>
              </div>
            </div>
          </div>
          <p className="edit">Edit</p>
        </div>
        <div className="clients info">
          <div className="client__details dates__hours">
            <p className="boldText">Client</p>
            <p className="smallTextConfirm">{user.adult} Client</p>
          </div>
          <p className="edit">Edit</p>
        </div>
      </div>
      <Link to="/payment">
        <Button text="Continue" />
      </Link>
    </div>
  );
}

export default Confirmation;
