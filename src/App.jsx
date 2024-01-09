import React, { Fragment } from "react";
import LoginPage from "./component/LoginPage";
import RegistrationPage from "./component/RegistrationPage";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function App() {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="confirmPassword">confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          autoComplete="off"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="submit">submit</button>
      </form>
    </Fragment>
  );
}
