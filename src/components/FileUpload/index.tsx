"use client";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ButtonLiner from "../ui/button-liner";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { mediaSchema, updateSchema } from "@/schema/mediaSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputForm from "../Base/Form/InputForm";
import TextareaForm from "../Base/Form/TextareaForm";

export default function FileUpload(props: {
  imageUpdate?: any;
  token: string;
  refetch: () => void;
  closePopup: any;
}) {
  const { token, refetch, closePopup, imageUpdate } = props;

  const [image, setImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(imageUpdate ? updateSchema : mediaSchema),
    ...(imageUpdate ? { defaultValues: imageUpdate } : {}),
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string);
        setValue("data", reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (data: any) => {
    data.type = "MEDIA";
    const result = await fetch("/admin/api/media", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });

    if (result.ok) {
      refetch();
    }
  };

  const updateImage = async (data: any) => {
    data.type = "MEDIA";
    const mediaUpdate = {
      type: "MEDIA",
      title: data.title,
      description: data.description,
      mediaId: imageUpdate._id,
    };
    const result = await fetch("/admin/api/media", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(mediaUpdate),
    });
    if (result.ok) {
      refetch();
    }
  };

  const deleteImage = async () => {
    const result = await fetch("/admin/api/media", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        mediaId: imageUpdate._id,
      }),
    });
    if (result.ok) {
      refetch();
      closePopup(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(imageUpdate ? updateImage : uploadImage)}>
      <DialogHeader>
        <DialogTitle>File Upload</DialogTitle>
        <DialogDescription>
          Upload media files here. Click save when you&apos;re done.
        </DialogDescription>
      </DialogHeader>
      <div className="mb-6 mt-12">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <InputForm
          className="!p-3"
          error={errors?.title?.message}
          register={register}
          name="title"
          type="text"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <TextareaForm
          error={errors?.description?.message}
          register={register}
          name="description"
        />
      </div>

      {!imageUpdate && (
        <div className="flex items-center justify-center">
          {image ? (
            <div className="flex flex-col items-center">
              <div className="flex flex-col overflow-hidden items-center justify-center w-auto h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <Image
                  src={image}
                  width={355}
                  height={256}
                  quality={100}
                  className="w-[355px] h-auto max-h-[355px]"
                  alt="Selected"
                />
              </div>
              <span
                onClick={() => {
                  setImage(null);
                  setValue("data", "");
                }}
                className="text-sm cursor-pointer text-blue-500"
              >
                Remove
              </span>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG (MAX. 5mb)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {errors?.data?.message && (
                <p className="text-sm text-red-500">
                  {errors?.data?.message as string}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center items-center mt-6">
        {imageUpdate && (
          <button
            type="button"
            onClick={deleteImage}
            className="focus:outline-none text-white bg-red-700 font-medium rounded-lg text-sm px-8 py-2 me-2"
          >
            Delete
          </button>
        )}
        <ButtonLiner type="submit" loading={isSubmitting} className="text-sm">
          Save changes
        </ButtonLiner>
      </div>
    </form>
  );
}
