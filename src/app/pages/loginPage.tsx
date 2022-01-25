import { Button, TextField } from "app/components";
import { Forms } from "app/layouts";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

function LoginPage() {
  return (
    <main className="container page-100 login">
      <div className="login-container">
        <div className="login__header">
          <Logo />
          <h3>Sign into your account</h3>
        </div>
        <Forms>
          <TextField id="login" type="email" style="u-mb-xxl" />
          <Button label="Continue" size="lg" />
        </Forms>

        <div className="login__social">
          <p>Or sign in with</p>
          <div className="socials-icons">
            <a href="#test">
              <AiFillFacebook className="icon icon--black" />
            </a>
            <a href="#test">
              <BsTwitter className="icon icon--black" />
            </a>
            <a href="#test">
              <FaLinkedinIn className="icon icon--black" />
            </a>
            <a href="#test">
              <TiSocialInstagram className="icon icon--black" />
            </a>
          </div>
        </div>
        <div className="login__footer">
          <hr />
          <p>Don't have an account yet?</p>
          <Button label="Create one now" size="lg" type="secondary" />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
