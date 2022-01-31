import logo from "../../assets/logo.svg";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import { Langages } from ".";
import { UserContext } from "app/context/user.Context";
import { navPublicItems, navPrivateItems } from "../Data/data";
import { ReactComponent as IconMsg } from "../../assets/icon-msg.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [items, setItems] = useState(navPublicItems);
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    if (user.userID) {
      setItems(navPrivateItems);
    } else {
      setItems(navPublicItems);
    }
  }, [user]);

  const handelShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 899) {
        setIsActive(true);
      } else {
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
            {items.map((item, index) => {
              const { to, label } = item;
              return (
                <li className="link-item" key={index}>
                  <Link to={to} className="btn btn-text">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="navbar__right">
            <Langages />
            {user.userID && (
              <Link to="/messages" className="btn btn-text">
                <span className="position-relative">
                  <IconMsg className="btn--icon" />
                  <span className="badge">9</span>
                </span>
                Messages
              </Link>
            )}
            {!user.userID ? (
              <Link to="/login" className="btn btn-text">
                Login
              </Link>
            ) : (
              <Link to="/" className="btn btn-text" onClick={logout}>
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
