import logo from "../../assets/logo.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import { Langages } from ".";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
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
              <Link
                to={{ pathname: "/", hash: "section-2" }}
                className="btn btn-text"
              >
                how its works
              </Link>
            </li>
            <li className="link-item">
              <Link to={"/on-boarding"} className="btn btn-text">
                Become a tutor
              </Link>
            </li>
            <li className="link-item">
              <Link
                to={{ pathname: "/", hash: "section-3" }}
                className="btn btn-text"
              >
                FAQs
              </Link>
            </li>
            <li className="link-item">
              <Link to="/about-us" className="btn btn-text">
                About us
              </Link>
            </li>
          </ul>
          <div className="navbar__right">
            <Langages />
            <Link to="/login" className="btn btn-text">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
