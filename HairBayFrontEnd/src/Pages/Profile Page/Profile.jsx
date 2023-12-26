import ProfileAvatar from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { MdLocationOn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import Calendar from "../../Components/Calendar/ParentCalendar/Calendar";
import { LiaStarSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <FaAngleLeft className="arrowBack" />
          </Link>
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
            <p className="text-for-user-details textProfile">Manhattan,USA</p>
          </div>
          <div className="type-hairstyle">
            <span>
              <BsFillPeopleFill className="symbol" />
            </span>
            <p className="text-for-user-details textProfile">
              Unisex Hairstylist
            </p>
          </div>
          <div className="type-hairstyle">
            <span>
              <FaBuilding className="symbol" />
            </span>
            <p className="text-for-user-details textProfile">
              Unisex Hairstylist
            </p>
          </div>
        </div>
        <div className="user-image-container">
          <button className="button">See More</button>
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
        <div className="calendar-and-bookNow-container">
          <div className="header-and-calendar">
            <h3>Book Benjamin Cuts now</h3>
            <Calendar />
          </div>
          <div className="calendarBook">
            <div className="bookNow-container">
              <div className="price-heading">
                <p className="price">
                  $50 <span>hour</span>
                </p>
                <div className="ratings">
                  <p>150</p>
                  <div className="icon-rating">
                    <LiaStarSolid className="icon" />
                    <LiaStarSolid className="icon" />
                    <LiaStarSolid className="icon" />
                  </div>
                </div>
              </div>

              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
