import logo from "../../assets/logo.svg";
import { TiArrowSortedDown } from "react-icons/ti";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const lagagesList = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handelShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 899) {
        console.log(width);
        setIsActive(true);
      } else {
        console.log(width);
        setIsActive(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <nav>
      <div className="container ">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <button className="toggle-navbar" onClick={handelShow}>
          <FaBars className="btn-icon" />
        </button>
        <div
          className={clsx("navbar collapse", (isActive || isShow) && `show`)}
        >
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
      </div>
    </nav>
  );
};

export default Navbar;
