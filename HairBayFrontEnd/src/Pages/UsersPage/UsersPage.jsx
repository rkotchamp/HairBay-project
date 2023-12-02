import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
import UserCards from "../../Components/UserCards/UserCards";
import "./UsersPage.css";

const categories = ["All Stylists", "Unisex", "Male", "Female"];
function UsersPage({ users }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sorts, setSorts] = useState("All Stylists");
  console.log(sorts);

  const filteredUsers =
    sorts === "All Stylists"
      ? users
      : users.filter((user) => user.category === sorts);

  return (
    <div className="users-page-container">
      <NavBar classNameChange="newNav-bar" />
      <div className="users-page-sort">
        {categories.map((category, i) => {
          return (
            <div
              className={
                activeCategory === i
                  ? "sortBy-container active"
                  : "sortBy-container"
              }
              key={i}
              onClick={() => {
                setActiveCategory(i);
                setSorts(categories[i]);
              }}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="rendered-users">
        <UserCards users={filteredUsers} />
      </div>
    </div>
  );
}

export default UsersPage;
