import * as Yup from 'yup'

export const signInSchema=Yup.object({
    fullName:Yup.string().min(2).max(30).required("Please Enter Your Name"),
    password:Yup.string().min(6).required("Please Enter Your Password !"),
    confirmPassword:Yup.stri
})