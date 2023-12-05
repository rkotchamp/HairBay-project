import ProfileAvatar from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { MdLocationOn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <FaAngleLeft className="arrowBack" />
        </div>
        <div className="user-header">
          <div className="profile--avatar">
            <div className="light--background light--one">
              <div className="light--background light--two">
                <img src={ProfileAvatar} alt="" className="avatarProfile" />
              </div>
            </div>
          </div>
          <h3 className="user-profile-name">Benjamin Cutz</h3>
        </div>
        <div className="profiles-call-to-actions">
          <Button text="Message" />
          <Button text="Book Now" />
        </div>
        <div className="profile-info">
          <div className="location">
            <span>
              <MdLocationOn />
            </span>
            <p>Manhattan,USA</p>
          </div>
          <div className="type-hairstyle">
            <span>
              <BsFillPeopleFill />
            </span>
            <p>Unisex Hairstylist</p>
          </div>
          <div className="type-hairstyle">
            <span>
              <BsFillPeopleFill />
            </span>
            <p>Unisex Hairstylist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
