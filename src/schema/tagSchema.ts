import * as yup from "yup";

export const tagSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  featuredMedia: yup.string().required("Featured media is required"),
});
