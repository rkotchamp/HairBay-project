import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
import UserCards from "../../Components/UserCards/UserCards";
import "./UsersPage.css";

const categories = ["Unisex", "Male", "Female"];
function UsersPage({ users }) {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className="users-page-container">
      <NavBar classNameChange="newNav-bar" />
      <div className="users-page-sort">
        {/* <SortBy category="Unisex" />
        <SortBy category="Male" />
        <SortBy category="Female" /> */}
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
        <UserCards users={users} />
      </div>
    </div>
  );
}

export default UsersPage;
