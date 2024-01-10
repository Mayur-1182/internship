import * as Yup from "yup";

export const signInSchema = Yup.object({
  fullName: Yup.string()
    .min(4, "Enter Valid Name")
    .max(30, "Name is Too larger")
    .required("Name is Required Field"),
  email: Yup.string()
    .email("Invalid email adress")
    .required("email is required filed")
    .test({
      name: "email validation",
      message: "entered email address is invalid ",
      test: (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
    }),
  phone: Yup.string().min(10).max(12).required("Phone number is required!!"),
  password: Yup.string()
    .min(6, "Password is too small")
    .required("Password is required filed!!"),
});
