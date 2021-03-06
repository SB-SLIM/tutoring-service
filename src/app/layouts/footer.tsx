import { ReactComponent as Logo } from "../../assets/logo.svg";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "app/components/index";

const Footer = () => {
  return (
    <footer>
      <div className="footer-public">
        <div className="container footer__social">
          <div className="footer-links">
            <div className="links">
              <h5>Company</h5>
              <Link to="/">About Btutor.com</Link>
              <Link to="/">Contact Us</Link>
            </div>
            <div className="links">
              <h5>Tutor</h5>
              <Link to="/">Become a tutor</Link>
              <Link to="/">How its works</Link>
              <Link to="/">FAQs</Link>
            </div>
            <div className="links">
              <h5>Help</h5>
              <Link to="/">Support</Link>
              <Link to="/">FAQs</Link>
              <Link to="/">Terms and Conditions</Link>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
          <div className="footer-social">
            <Logo className="logo" />
            <div>
              <p>
                Follow us <span className="follow-text">#Btutor</span>
              </p>
            </div>
            <div className="socials-icons">
              <a href="#test">
                <AiFillFacebook className="icon" />
              </a>
              <a href="#test">
                <BsTwitter className="icon" />
              </a>
              <a href="#test">
                <FaLinkedinIn className="icon" />
              </a>
              <a href="#test">
                <TiSocialInstagram className="icon" />
              </a>
            </div>
            <Button label={"Become a tutor now!"} />
          </div>
        </div>
      </div>
      <div className="footer-origin">
        <div className="container footer__copy">
          <p className="align">&copy; 2021 Btutor.com All rightsreserved.</p>
          <p className="align">Made in USA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
