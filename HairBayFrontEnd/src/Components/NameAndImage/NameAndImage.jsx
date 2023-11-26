import profile from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import "./NameAndImage.css";

function NameAndImage() {
  return (
    <div className="nameAndImage-container">
      <div className="nameImage-content">
        <img src={profile} alt="" className="profile-content" />
      </div>
    </div>
  );
}

export default NameAndImage;
