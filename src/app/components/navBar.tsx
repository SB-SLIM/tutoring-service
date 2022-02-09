import logo from "../../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import { Langages } from ".";
import { UserContext } from "app/context/user.Context";
import { navPublicItems, navPrivateItems } from "../Data/data";
import { ReactComponent as IconMsg } from "../../assets/icon-msg.svg";
import Profile from "./Profile";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [items, setItems] = useState(navPublicItems);
  const { user, logout, authTokens } = useContext(UserContext);

  useEffect(() => {
    if (user !== null) {
      setItems(navPrivateItems);
    } else {
      setItems(navPublicItems);
    }
  }, [user]);

  const handelShow = () => {
    setIsShow(!isShow);
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
        <div className={clsx("navbar collapse", isShow && `show`)}>
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
            {authTokens && (
              <Link to="/messages" className="btn btn-text">
                <span className="position-relative">
                  <IconMsg className="btn--icon" />
                  <span className="badge">9</span>
                </span>
                Messages
              </Link>
            )}
            {!authTokens ? (
              <Link to="/login" className="btn btn-text">
                Login
              </Link>
            ) : (
              <>
                <Profile picture={user.picture} userName={user.name} />
                <div className="profile-container">
                  <Link to="/" className="btn btn-text" onClick={logout}>
                    Logout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
