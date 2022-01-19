import logo from "../../assets/logo.svg";
import { TiArrowSortedDown } from "react-icons/ti";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const lagagesList = useRef<HTMLDivElement>(null);

  const onMouseenter = () => {
    if (lagagesList.current !== null) {
      lagagesList.current.classList.add("show");
    }
  };

  const onMouseleave = () => {
    if (lagagesList.current !== null) {
      lagagesList.current.classList.remove("show");
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div className="navbar__left">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="links">
            <li className="link-item">
              <Link to={{ pathname: "/", hash: "section-2" }}>
                how its works
              </Link>
            </li>
            <li className="link-item">
              <Link to={{ pathname: "/", hash: "section-1" }}>
                Become a tutor
              </Link>
            </li>
            <li className="link-item">
              <Link to={{ pathname: "/", hash: "section-3" }}>FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar__right">
          <button
            className="langage"
            type="button"
            onMouseEnter={onMouseenter}
            onMouseLeave={onMouseleave}
          >
            <TiArrowSortedDown />
            <span>English (En)</span>
            <div
              className="langages-list collapse"
              ref={lagagesList}
              onMouseLeave={onMouseleave}
            >
              <div className="triangle">
                <div className="inside" />
              </div>
              <ul>
                <li>English (En)</li>
                <li>Frensh (Fr)</li>
              </ul>
            </div>
          </button>

          <Link to="/about-us" className="link-item">
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
