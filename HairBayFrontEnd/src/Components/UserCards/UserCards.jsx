import { Link } from "react-router-dom";
import image from "../../assets/neom-rVC6O_gDE0Q-unsplash.jpg";
import NameAndImage from "../NameAndImage/NameAndImage";

import "./UserCards.css";

function UserCards({ users }) {
  return (
    <>
      {users.map((user) => {
        return (
          <div className="userCards-container" key={user?.id}>
            <Link to={`/profile/${user?.id}`}>
              <NameAndImage
                fullname={user?.fullName}
                location={user?.location}
                totalCustomers={user?.totalCustomers}
                avatar={user?.avatar}
              />
            </Link>

            <img src={user?.cardCover} alt="" className="image-container" />
          </div>
        );
      })}
    </>
  );
}

export default UserCards;
