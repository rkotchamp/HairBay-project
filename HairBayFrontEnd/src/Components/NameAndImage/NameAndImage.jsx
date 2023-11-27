import profile from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import "./NameAndImage.css";

function NameAndImage() {
  return (
    <div className="nameAndImage-container">
      <div className="name-location">
        <h5 className="full-name">Benjamin Cole</h5>
        <p className="location">City, Country</p>
        <p className="customers">12000 customers</p>
      </div>
      <div className="nameImage-content">
        <img src={profile} alt="" className="profile-content" />
      </div>
    </div>
  );
}

export default NameAndImage;
