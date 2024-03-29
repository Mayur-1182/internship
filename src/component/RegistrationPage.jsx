import React, { Fragment, useState } from "react";
import { signInSchema } from "../schemas/registrationShema.jsx";
import "./Registration.css";
import { useFormik } from "formik";

const initialValues = {
  user_name: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  designation: "",
  company_name: "",
  phoneNumber: "",
};

export default function RegistrationPage() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, { resetForm }) => {
        console.log("Form Submitted");
        console.log(values);
        resetForm();
      },
    });
  console.log(errors);
  return (
    <Fragment>
      <h1>Registration Form</h1>
      <form className="registration_form" onSubmit={handleSubmit}>
        <Fragment>
          <div className="user_controls">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user_name}
            />
            {touched.user_name ? (
              <span className="error_msg">{errors.user_name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="user_controls">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password ? (
              <span className="error_msg">{errors.password}</span>
            ) : (
              ""
            )}
          </div>
          <div className="user_controls">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.first_name}
            />
            {touched.first_name ? (
              <span className="error_msg">{errors.first_name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="user_controls">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.last_name}
            />
            {touched.last_name ? (
              <span className="error_msg">{errors.last_name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="user_controls">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email ? (
              <span className="error_msg">{errors.email}</span>
            ) : (
              ""
            )}
          </div>
          <div className="user_controls">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            {touched.phoneNumber ? (
              <span className="error_msg">{errors.phoneNumber}</span>
            ) : (
              ""
            )}
          </div>
        </Fragment>
        <Fragment>
          <div className="user_controls">
            <label htmlFor="company_name">Company Name</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.company_name}
            />
            {touched.company_name ? (
              <span className="error_msg">{errors.company_name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="user_controls">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.designation}
            />
            {touched.designation ? (
              <span className="error_msg">{errors.designation}</span>
            ) : (
              ""
            )}
          </div>
          <div className="user_actions">
            <button type="submit">SignUp</button>
          </div>
        </Fragment>
      </form>
    </Fragment>
  );
}
