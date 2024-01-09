import React, { useState } from "react";

export default function useInput(validateFunction) {
  const [value, setValue] = useState("");
  const [touch, setTouch] = useState(false);
  const inputValidity = validateFunction(value);
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

  return {
    value,
    inputValid,
    inputValidity,
    inputChangeHandler,
    inputBlurHandler,
    resetHandler,
  };
}
