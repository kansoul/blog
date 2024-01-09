import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9]*$/,
      "Username must start with a letter and only contain letters and numbers"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Password must contain at least one letter and one number"
    ),
});

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9]*$/,
      "Username must start with a letter and only contain letters and numbers"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Password must contain at least one letter and one number"
    ),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});
