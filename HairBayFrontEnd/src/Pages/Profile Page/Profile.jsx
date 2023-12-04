import ProfileAvatar from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaAngleLeft className="arrowBack" />
      </div>
      <div className="profile-content">
        <div className="profile--avatar">
          <div className="light--background light--one">
            <div className="light--background light--two">
              {/* <img src={ProfileAvatar} alt="" className="avatarProfile" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
