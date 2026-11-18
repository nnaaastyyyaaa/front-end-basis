import { useState } from "react";
import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <button className="header__logo">Design</button>
      <ul className="header__menu">
        <li className="header__menu--item">Home</li>
        <li
          className="header__menu--item header__dropdown"
          onClick={() => setIsOpen(!isOpen)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            className="header__dropdown-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            Dropdown
          </button>
          {isOpen && (
            <ul className="header__submenu">
              <li className="header__submenu--item">Page one</li>
              <li className="header__submenu--item">Page two</li>
              <li className="header__submenu--item">Page three</li>
            </ul>
          )}
        </li>
        <li className="header__menu--item">Inner page</li>
        <li className="header__menu--item">Contact us</li>
      </ul>
      <button className="header__button">Free templates</button>
    </div>
  );
}

export default Header;
