import NavBar from "../../Components/NavBar/NavBar";
import SortBy from "../../Components/SortBy/SortBy";

import "./UsersPage.css";

function UsersPage() {
  return (
    <div className="users-page-container">
      <NavBar classNameChange="newNav-bar" />
      <div className="users-page-sort">
        <SortBy category="Unisex" />
        <SortBy category="Male" />
        <SortBy category="Female" />
      </div>
    </div>
  );
}

export default UsersPage;
