import React, { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");
  const [touch, setTouch] = useState(false);
  const inputValidity = emailValidation(value);
  const inputValid = touch && !inputValidity;

  function inputChangeHandler(e) {
    setValue(e.target.value);
  }

  function inputBlurHandler() {
    setTouch(true);
  }

  function resetHandler() {
    setValue("");
    setTouch("");
  }

  function emailValidation(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  return {
    value,
    inputValid,
    inputValidity,
    inputChangeHandler,
    inputBlurHandler,
    resetHandler,
  };
}
