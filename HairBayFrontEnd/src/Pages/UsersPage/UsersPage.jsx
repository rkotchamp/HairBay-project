import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
import UserCards from "../../Components/UserCards/UserCards";
import "./UsersPage.css";

const categories = ["All Stylists", "Unisex", "Male", "Female"];
function UsersPage({ users }) {
  console.log(users.map((user) => user.category));
  const [activeCategory, setActiveCategory] = useState(0);
  const [user, setUser] = useState();
  console.log(activeCategory);
  console.log(user);
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
              onClick={() => setActiveCategory(i)}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="rendered-users">
        {users
          .filter(
            (user) =>
              user.category === categories[activeCategory] ||
              categories[activeCategory] === 0
          )
          .map((user, i) => {
            return <UserCards users={users} key={i} />;
          })}
        {/* <UserCards users={users} /> */}
      </div>
    </div>
  );
}

export default UsersPage;
