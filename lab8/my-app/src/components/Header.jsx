import { useState } from "react";
import "./Header.scss";
import { useModal } from "../context/Modal";

function Header({ route }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  function closeMenus() {
    setIsOpen(false);
    setIsMenuOpen(false);
  }

  const active = (path) => (route === path ? " header__link--active" : "");

  return (
    <div className="header">
      <a className="header__logo" href="#/" onClick={closeMenus}>
        Design
      </a>
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
        <li className="header__menu--item">
          <a
            className={"header__link" + active("/")}
            href="#/"
            onClick={closeMenus}
          >
            Home
          </a>
        </li>
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
              <li className="header__submenu--item">
                <a
                  className={"header__link" + active("/page-one")}
                  href="#/page-one"
                  onClick={closeMenus}
                >
                  Page one
                </a>
              </li>
              <li className="header__submenu--item">
                <a
                  className={"header__link" + active("/page-two")}
                  href="#/page-two"
                  onClick={closeMenus}
                >
                  Page two
                </a>
              </li>
              <li className="header__submenu--item">
                <a
                  className={"header__link" + active("/page-three")}
                  href="#/page-three"
                  onClick={closeMenus}
                >
                  Page three
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="header__menu--item">
          <a
            className={"header__link" + active("/inner")}
            href="#/inner"
            onClick={closeMenus}
          >
            Inner page
          </a>
        </li>
        <li className="header__menu--item">
          <a
            className={"header__link" + active("/contact")}
            href="#/contact"
            onClick={closeMenus}
          >
            Contact us
          </a>
        </li>
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
