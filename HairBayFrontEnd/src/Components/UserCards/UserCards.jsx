import { Link, useParams } from "react-router-dom";
import image from "../../assets/neom-rVC6O_gDE0Q-unsplash.jpg";
import NameAndImage from "../NameAndImage/NameAndImage";

import "./UserCards.css";

function UserCards({ users }) {
  const { userId } = useParams();
  console.log(userId);

  return (
    <>
      {users.map((user) => {
        return (
          <div className="userCards-container" key={user?.id}>
            {/* <Link to="/profile"> */}
            <NameAndImage
              fullname={user?.fullName}
              location={user?.location}
              totalCustomers={user?.totalCustomers}
              avatar={user?.avatar}
            />
            {/* </Link> */}

            <img src={user?.cardCover} alt="" className="image-container" />
          </div>
        );
      })}
    </>
  );
}

export default UserCards;
