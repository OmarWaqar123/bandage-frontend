import * as yup from "yup"

const loginSchema = yup.object({
    email: yup.
    string()
    .email()
    .required("Please enter your email"),

    password: yup.string().min(6,"Password is too short")
    .required("Please enter your password")
})

export default  loginSchema