import React, { useState } from "react";
import loginImg from "../assets/login_image.avif";
import "./LoginPage.css";

export default function LoginPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  function emailChangeHandler(e) {
    setEnteredEmail(e.target.value);
  }

  function passwordChangeHandler(e) {
    setEnteredPassword(e.target.value);
  }

  function emailBlurHandler() {}

  function passwordBlurHandler() {}

  function submitHandler(e) {
    e.preventDefault();
    console.log("login successfully!!");
    console.log(enteredEmail, enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");
  }

  return (
    <main className="login_form">
      <div className="login_image">
        <img src={loginImg} alt="" />
      </div>
      <form onSubmit={submitHandler}>
        <div className="user_email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={emailBlurHandler}
          />
          <span
            className={`${emailIsValid ? "error_msg " : "error_msg error"} `}
          >
            email can't be empty
          </span>
        </div>
        <div className="user_password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBeforeInput={passwordBlurHandler}
          />
          <span
            className={`${passwordIsValid ? "error_msg " : "error_msg error"} `}
          >
            password can't be empty
          </span>
        </div>
        <div className="user_login">
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
