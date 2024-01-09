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
  } = useInput(emailValidation);

  function emailValidation(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const {
    value: passwordValue,
    inputValid: passwordInputValid,
    inputValidity: passwordInputValidity,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetHandler: passwordResetHandler,
  } = useInput(passwordValidation);

  function passwordValidation(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("login successfully!!");
    console.log(emailValue, passwordValue);
    emailResetHandler();
    passwordResetHandler();
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
          <span
            className={`${
              emailInputValid ? "error_msg error " : "error_msg "
            } `}
          >
            email can't be empty
          </span>
        </div>
        <div className="user_password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={`${passwordInputValid ? "inValid" : ""}`}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={passwordValue}
          />
          <span
            className={`${
              passwordInputValid ? "error_msg error" : "error_msg "
            } `}
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
