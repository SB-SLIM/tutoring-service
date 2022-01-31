import { Button, TextField, Langages } from "app/components/index";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import React, { useContext, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { UserContext } from "app/context/user.Context";

function LoginPage() {
  const { login } = useContext(UserContext);
  const [value, setValue] = useState("");

  const handelSubmit = (e: any) => {
    e.preventDefault();
    login(value);
  };

  const handelChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <main className="container page-100 login">
      <div className="login-container">
        <div className="login__header">
          <Logo />
          <h3>Sign into your account</h3>
        </div>
        <form onSubmit={handelSubmit}>
          <TextField
            id="login"
            type="email"
            style="u-mb-xxl"
            value={value}
            handelChange={handelChange}
          />
          <Button label="Continue" size="lg" />
        </form>

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
      <div className="policy">
        <Langages />
        <p>
          By continuing, you confirm that you have read and agreed to our Terms
          & Conditions and Privacy Policy.
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
