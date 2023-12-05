import ProfileAvatar from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { MdLocationOn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";

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
          <div className="location type-hairstyle">
            <span>
              <MdLocationOn className="symbol" />
            </span>
            <p className="text-for-user-details">Manhattan,USA</p>
          </div>
          <div className="type-hairstyle">
            <span>
              <BsFillPeopleFill className="symbol" />
            </span>
            <p className="text-for-user-details">Unisex Hairstylist</p>
          </div>
          <div className="type-hairstyle">
            <span>
              <FaBuilding className="symbol" />
            </span>
            <p className="text-for-user-details">Unisex Hairstylist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
