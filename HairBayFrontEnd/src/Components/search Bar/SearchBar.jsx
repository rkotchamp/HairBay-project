import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search__container">
      <input
        type="text"
        className="search__input location__input"
        placeholder="Location"
      />
      <input
        type="text"
        className="search__input date__input"
        placeholder="Date"
      />
      <div className="search__logo__container">
        <div className="searchBtn">
          <FaSearch className="icon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
