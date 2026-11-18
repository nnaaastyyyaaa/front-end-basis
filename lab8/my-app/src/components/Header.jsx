import { useState } from "react";
import "./Header.scss";
import { useModal } from "../context/Modal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <div className="header">
      <button className="header__logo">Design</button>
      <button
        className={
          "header__burger" + (isMenuOpen ? " header__burger--open" : "")
        }
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul
        className={"header__menu" + (isMenuOpen ? " header__menu--open" : "")}
      >
        <li className="header__menu--item">Home</li>
        <li
          className="header__menu--item header__dropdown"
          onPointerEnter={(e) => e.pointerType === "mouse" && setIsOpen(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setIsOpen(false)}
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
      <button
        className={
          "header__button" + (isMenuOpen ? " header__button--open" : "")
        }
        onClick={openModal}
      >
        Free templates
      </button>
    </div>
  );
}

export default Header;
