import * as yup from "yup"

const signupSchema = yup.object({
    username: yup.
    string()
    .min(2, "username is too short")
    .max(20, "max charachter limit reached")
    .required("Please enter your name"),

    email: yup.
    string()
    .email()
    .required("Please enter your email"),

    password: yup.string().min(6,"Password is too short")
    .required("Please enter your password")
})

export default  signupSchema