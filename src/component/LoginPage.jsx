import React, { useState } from "react";
import loginImg from "../assets/login_image.avif";
import "./LoginPage.css";
import useInput from "../hooks/useInput";

export default function LoginPage() {
  const {
    value: emailValue,
    inputValid: emailInputValid,
    inputValidity: emailInputValidity,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput();

  function emailValidation(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("login successfully!!");
    console.log(emailValue);
    emailResetHandler();
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
            className={`${emailInputValid ? "inValid" : ""}`}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {/* <span
            className={`${emailIsValid ? "error_msg " : "error_msg error"} `}
          >
            email can't be empty
          </span> */}
        </div>
        <div className="user_password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          {/* <span
            className={`${passwordIsValid ? "error_msg " : "error_msg error"} `}
          >
            password can't be empty
          </span> */}
        </div>
        <div className="user_login">
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
