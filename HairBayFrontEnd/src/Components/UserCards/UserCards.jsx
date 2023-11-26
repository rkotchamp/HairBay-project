import image from "../../assets/neom-rVC6O_gDE0Q-unsplash.jpg";
import NameAndImage from "../NameAndImage/NameAndImage";

import "./UserCards.css";

function UserCards() {
  return (
    <div className="userCards-container">
      <NameAndImage />

      <img src={image} alt="" className="image-container" />
    </div>
  );
}

export default UserCards;
