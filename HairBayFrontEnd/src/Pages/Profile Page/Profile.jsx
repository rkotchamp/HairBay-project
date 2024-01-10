import ProfileAvatar from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { MdLocationOn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import Calendar from "../../Components/Calendar/ParentCalendar/Calendar";
import { LiaStarSolid } from "react-icons/lia";
import { Link, useParams } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import AddCount from "../../Components/AddCount/AddCount";
import "./Profile.css";

const userImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1532710093739-9470acff878f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1488282687151-c5e6582e7cf1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Profile({ users }) {
  const [iconUp, setIconUp] = useState(false);
  const [iconDown, setIconDown] = useState(true);

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleAdultCount = () => {
    // if (adultCount > 0) {
    setAdultCount(adultCount + 1);
    // }
  };
  const handleMinusAdultCount = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };
  const minusCount = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };
  const plusCount = () => {
    // if (childrenCount > 0) {
    setChildrenCount(childrenCount + 1);
    // }
  };

  const handleUpIcon = () => {
    setIconDown(!iconDown);
    setIconUp(!iconUp);
  };

  const { id } = useParams();
  const userData = users.find((u) => u.id === Number(id));

  console.log(userData.environment);

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
                <img
                  src={userData.avatar}
                  alt={userData.fullName}
                  className="avatarProfile"
                />
              </div>
            </div>
          </div>
          <h3 className="user-profile-name">{userData.fullName}</h3>
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
            <p className="text-for-user-details textProfile">
              {userData.location}
            </p>
          </div>
          <div className="type-hairstyle">
            <span>
              <BsFillPeopleFill className="symbol" />
            </span>
            <p className="text-for-user-details textProfile">
              {userData.category} Stylist
            </p>
          </div>
          <div className="type-hairstyle">
            <span>
              <FaBuilding className="symbol" />
            </span>
            <p className="text-for-user-details textProfile">
              {userData.environment}
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
            <h3>Book now</h3>
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

              <div className="appointment__info">
                <div className="dateAndHour">
                  <div className="startDate">
                    <p className="bigText">START DATE</p>
                    <p className="smallText">11/02/2023</p>
                  </div>
                  <div className="startHours">
                    <p className="bigText">HOURS</p>
                    <p className="smallText">12:30</p>
                  </div>
                </div>
                <div className="client-details" onClick={handleUpIcon}>
                  <div className="clients">
                    <p className="client__title bigText">CLIENTS</p>
                    <p className="client__info smallText">1 Client</p>
                  </div>
                  <div className="upAndDown">
                    {iconUp && <FaAngleUp className="icon-up" />}
                    {iconDown && <FaAngleDown className="icon-up" />}
                  </div>
                </div>
              </div>
            </div>
            <span>
              <Link to={`/confirm/${id}`}>
                <Button text="Book Now" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      {iconUp && (
        <AddCount
          handleAdultCount={handleAdultCount}
          countOne={adultCount}
          countTwo={childrenCount}
          handleMinusAdultCount={handleMinusAdultCount}
          minusCount={minusCount}
          plusCount={plusCount}
        />
      )}
    </div>
  );
}

export default Profile;
