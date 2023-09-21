import "./Header.css";
import logo from "../assets/moviebox-logo.svg";

const Header = () => {
  return (
    <div className="header flex simple-flex">
      <div className="flex simple-flex">
        <img className="mr-3" src={logo} alt="" />
        Moviebox
      </div>
      <div className="flex simple-flex header__searchBar">
        <input
          type="text"
          className="input"
          placeholder="What do you want to watch?"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <div className="flex simple-flex">
        <span className="mr-3">Sign in</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
