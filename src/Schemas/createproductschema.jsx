import * as yup from "yup"

const createproductSchema = yup.object({
    productname: yup.
    string()
    .min(2, "productname is too short")
    .max(70, "max charachter limit reached")
    .required("Please enter the Product Name"),

    price: yup.number()
    .typeError('Invalid price').min(1,"Price is too Low").max(5000)
    .positive('Price must be positive')
    .required('Price is required'),

    quantity: yup.number().typeError("Invalid Quantity").min(1,"quantity is too Low")
    .positive('quantity must be positive')
    .required('quantity is required'),

    description: yup.string().min(5,"Write some more").max(600, "max charachter limit reached")
    .required("Please enter the Description"),

})


export default createproductSchema;