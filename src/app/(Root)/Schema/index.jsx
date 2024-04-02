import * as yup from "yup";


export const Contactvalidate = yup.object().shape({
  fullName: yup.string().matches(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/ , "Invalid format").required("This field is required"),
  email: yup.string().email("Invalid Email").required("This field is required"),
    number: yup.string().matches(/^[0-9]{10}$/, 'Must be a 10-digit number').required('This field is required'),
});

export const validationSchema = yup.object().shape({
  email : yup.string().email("Invalid format").required("This field is required"),
  password : yup.string().required("This field is required"),
  number: yup.string().matches(/^[0-9]{10}$/, 'Must be a 10-digit number').required('This field is required'),
});



