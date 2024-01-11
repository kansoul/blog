import * as yup from "yup";

export const categorySchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  featuredMedia: yup.string().required("Featured media is required"),
  description: yup.string().required("Description is required"),
});
