import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup.string().email("invalid format").required("this code is required"),
  password: yup.string().required("this code is required"),
});

export const validationForgetSchema = yup.object().shape({
  email: yup.string().email("invalid format").required("this code is required"),
});

export const validationOtpSchema = yup.object().shape({
  email: yup.string().email("invalid format").required("Email is required"),
  otp: yup.string().required("OTP is required"),
  newPassword: yup.string().required("Password is required"),
});
