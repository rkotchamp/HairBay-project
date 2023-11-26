import profile from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

import "./UserAvatar.css";

function UserAvatar() {
  return (
    <div className="avatar-container">
      <div className="user__profile">
        <img src={profile} alt="" className="profile-image" />
      </div>
    </div>
  );
}

export default UserAvatar;
