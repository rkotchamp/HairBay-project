import ProfileAvatar from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { MdLocationOn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";

import "./Profile.css";
const userImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1532710093739-9470acff878f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1488282687151-c5e6582e7cf1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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
        <div className="user-images">
          {userImages.map((item, i) => {
            return (
              <div className={`item-container item-${i + 1}`} key={i}>
                <img src={item} alt="" className="itemImages item-" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
