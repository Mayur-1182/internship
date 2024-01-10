import React, { Fragment, useState } from "react";
import "./Registration.css";

export default function RegistrationPage() {
  return (
    <Fragment>
      <h1>Registration Form</h1>
      <form className="registration_form">
        <Fragment>
          <div className="user_controls">
            <label htmlFor="user_name">Username</label>
            <input type="text" id="user_name" name="user_name" />
          </div>
          <div className="user_controls">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="user_controls">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" name="firstName" />
          </div>
          <div className="user_controls">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" />
          </div>
          <div className="user_controls">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="user_controls">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phoneNumber" />
          </div>
        </Fragment>
        <Fragment>
          <div className="user_controls">
            <label htmlFor="company_name">Company Name</label>
            <input type="text" id="company_name" name="company_name" />
          </div>
          <div className="user_controls">
            <label htmlFor="designation">Designation</label>
            <input type="text" id="designation" name="designation" />
          </div>
          <div className="user_actions">
            <button type="submit">SignUp</button>
          </div>
        </Fragment>
      </form>
    </Fragment>
  );
}
