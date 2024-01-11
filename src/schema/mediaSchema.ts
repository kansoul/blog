import * as yup from "yup";

export const mediaSchema = yup.object().shape({
  title: yup.string().required("Name is required"),
  description: yup.string().optional(),
  data: yup.string().required("Image is required"),
});

export const updateSchema = yup.object().shape({
  title: yup.string().required("Name is required"),
  description: yup.string().optional(),
});
