import React, { Fragment, useState } from "react";
import "./Registration.css";

export default function RegistrationPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  return (
    <Fragment>
      <h1>Registration Form</h1>
      <form className="registration_form">
        <Fragment>
          <div className="user_controls">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" id="full_name" />
          </div>
          <div className="user_controls">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="user_controls">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="user_controls">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" />
          </div>
        </Fragment>
        <Fragment>
          <div className="user_controls">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="user_controls">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
          </div>
          <div className="user_controls gender">
            <label htmlFor="gender">Gender : </label>
            <div>
              <span>Male</span>
              <input type="radio" name="gender" value="male" />

              <span>Female</span>
              <input type="radio" name="gender" value="female" />
            </div>
          </div>
          <div className="user_actions">
            <button type="submit">SignUp</button>
          </div>
        </Fragment>
      </form>
    </Fragment>
    // </main>s
  );
}
