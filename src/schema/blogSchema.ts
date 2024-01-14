import * as yup from "yup";

const categorySchema = yup.object().shape({
  _id: yup.string().required("ID is required"),
  name: yup.string().required("Name is required"),
  featuredMedia: yup.string().required("featuredMedia is required"),
  slug: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});

const tagSchema = yup.object().shape({
  _id: yup.string().required("ID is required"),
  name: yup.string().required("Name is required"),
  featuredMedia: yup.string().required("featuredMedia is required"),
  slug: yup.string().required("Name is required"),
});

export const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  featuredMedia: yup.string().required("Featured media is required"),
  status: yup
    .string()
    .required("Status is required")
    .oneOf(["PUBLISH", "PRIVATE"], "Invalid status"),
  category: categorySchema.required("Category is required"),
  tags: yup.array().of(tagSchema).required("Tag is required"),
});
