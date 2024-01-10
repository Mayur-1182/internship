import * as Yup from "yup";

export const signInSchema = Yup.object({
  // fullName: Yup.string()
  //   .min(4, "Enter Valid Name")
  //   .max(30, "Name is Too larger")
  //   .required("Name is Required Field"),
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("email is required filed")
  //   .test({
  //     name: "email validation",
  //     message: "entered email address is invalid ",
  //     test: (email) => {
  //       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //       return emailRegex.test(email);
  //     },
  //   }),
  // phone: Yup.string().min(10).max(12).required("Phone number is required!!"),
  // password: Yup.string()
  //   .min(6, "Password is too small")
  //   .required("Password is required filed!!"),
  user_name: Yup.string().min(2).max(15).required("Username is required!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required filed")
    .test({
      name: "email validation",
      message: "entered email address is invalid ",
      test: (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
    }),
  password: Yup.string()
    .min(6, "Password is too small")
    .required("Password is required filed!!"),
  first_name: Yup.string().min(2).max(15).required("FirstName is required!"),
  last_name: Yup.string().min(2).max(15).required("LastName is required!"),
  company_name: Yup.string()
    .min(2)
    .max(15)
    .required("Company Name is required!"),
  designation: Yup.string().min(2).max(15).required("designation is required!"),
});
