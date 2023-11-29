import profile from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import "./NameAndImage.css";

function NameAndImage({ fullname, location, totalCustomers, avatar }) {
  return (
    <div className="nameAndImage-container">
      <div className="name-location">
        <h5 className="full-name">{fullname}</h5>
        <p className="location">{location}</p>
        <p className="customers">{totalCustomers} customers</p>
      </div>
      <div className="nameImage-content">
        <img src={avatar} alt="" className="profile-content" />
      </div>
    </div>
  );
}

export default NameAndImage;
