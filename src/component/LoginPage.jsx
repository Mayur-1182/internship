import React, { useState } from "react";
import loginImg from "../assets/login_image.avif";
import "./LoginPage.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/loginSchema";

export default function LoginPage1() {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("Form Submitted");
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <main className="login_form">
      <div className="login_image">
        <img src={loginImg} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="user_email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="error_msg">{errors.email}</p>
          ) : null}
        </div>
        <div className="user_password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="error_msg">{errors.password}</p>
          ) : null}
        </div>
        <div className="user_login">
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
