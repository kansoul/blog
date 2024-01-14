"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { API_URL } from "@/config";
import { categorySchema } from "@/schema/categorySchema";
import { changeTextToSlug } from "@/utils/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../Base/Form/InputForm";
import TextareaForm from "../Base/Form/TextareaForm";
import Gallery from "../Base/Gallery/Gallery";
import ButtonLiner from "../ui/button-liner";
import { tagSchema } from "@/schema/tagSchema";
import { srcImage } from "@/utils/image";

export default function CreateUpdateModal(props: {
  itemUpdate?: any;
  token: string;
  refetch: () => void;
  type: "category" | "tag";
}) {
  const { token, refetch, type, itemUpdate } = props;
  const [image, setImage] = useState<string>();
  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const isTag = type === "tag";
  const items = {
    title: isTag ? "Tag" : "Category",
    description: isTag
      ? " Create or update tags here. Click save when you&apos;re done."
      : "Create or update categories here. Click save when you&apos;re done.",
    schema: isTag ? tagSchema : categorySchema,
  };
  const bodyScroll = document.documentElement.style;

  useEffect(() => {
    bodyScroll.overflow = "hidden";
    return () => {
      bodyScroll.overflow = "scroll";
    };
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(items.schema),
    ...(itemUpdate ? { defaultValues: itemUpdate } : {}),
  });

  const sendRequest = async (method: string, data: any) => {
    try {
      data.slug = changeTextToSlug(data.name);
      const result = await fetch(`/admin/api/${type}`, {
        method,
        headers: {
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        refetch();
      } else {
        alert("An error occurred!");
      }
    } catch (error) {
      alert("An error occurred!");
    }
  };

  const update = async (data: any) => {
    await sendRequest("PUT", data);
  };

  const create = async (data: any) => {
    await sendRequest("POST", data);
  };

  const handleSetImage = (id?: string) => {
    setValue("featuredMedia", id);
    setImage(id);
  };

  useEffect(() => {
    if (itemUpdate) handleSetImage(itemUpdate?.featuredMedia);

    // eslint-disable-next-line
  }, [itemUpdate]);

  return (
    <>
      <form onSubmit={handleSubmit(itemUpdate ? update : create)}>
        <DialogHeader>
          <DialogTitle>{items.title}</DialogTitle>
          <DialogDescription>{items.description}</DialogDescription>
        </DialogHeader>
        <div className="mb-6 mt-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <InputForm
            className="!p-3"
            error={errors?.name?.message}
            register={register}
            name="name"
            type="text"
          />
        </div>
        {!isTag && (
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
        )}

        <div className="flex items-center justify-center">
          {image ? (
            <div className="flex flex-col items-center">
              <div className="flex flex-col overflow-hidden items-center justify-center w-auto h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <Image
                  src={srcImage(image)}
                  width={355}
                  height={256}
                  quality={100}
                  className="w-[355px] h-auto max-h-[355px]"
                  alt="Selected"
                />
              </div>
              <span
                onClick={() => {
                  handleSetImage();
                }}
                className="text-sm cursor-pointer text-blue-500"
              >
                Remove
              </span>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <label
                onClick={() => setOpenGallery(true)}
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
              </label>
              {errors?.featuredMedia?.message && (
                <p className="text-sm text-red-500">
                  {errors?.featuredMedia?.message as string}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-center items-center mt-6">
          <ButtonLiner type="submit" loading={isSubmitting} className="text-sm">
            Save changes
          </ButtonLiner>
        </div>
      </form>
      {openGallery && (
        <DialogPortal>
          <DialogContent
            className="w-2/3 h-4/5 max-w-full"
            onClose={() => setOpenGallery(false)}
          >
            <Gallery
              closeGallery={setOpenGallery}
              setMediaId={handleSetImage}
            />
          </DialogContent>
        </DialogPortal>
      )}
    </>
  );
}
