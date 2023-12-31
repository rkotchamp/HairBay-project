import Button from "../Button/Button";
import SearchBar from "../search Bar/SearchBar";
import logo from "../../assets/logo.png";
import UserAvatar from "../UserAvatar/UserAvatar";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ classNameChange }) {
  return (
    <div className={classNameChange}>
      <img src={logo} alt="" className="image" />
      <SearchBar />
      <Button text="Sign Up" />
      <Link to="/profile">
        <UserAvatar />
      </Link>
    </div>
  );
}

export default NavBar;
