"use client";

import Dropdown from "@/components/Base/Form/Dropdown";
import DropdownMultiSelect from "@/components/Base/Form/DropdownMultiSelect";
import InputForm from "@/components/Base/Form/InputForm";
import Gallery from "@/components/Base/Gallery/Gallery";
import ButtonLiner from "@/components/ui/button-liner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { APP_URL } from "@/config";
import { blogSchema } from "@/schema/blogSchema";
import { changeTextToSlug } from "@/utils/helper";
import { srcImage } from "@/utils/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
const Jodit = dynamic(() => import("@/components/Base/Jodit"), { ssr: false });

export default function CreateBlog() {
  const { data: session } = useSession();
  const router = useRouter();

  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const [tags, setTags] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(blogSchema),
  });

  const selectCategory = useWatch({ control, name: "category" });
  const selectTags = useWatch({ control, name: "tags" });
  const content = useWatch({ control, name: "content" });
  const image = useWatch({ control, name: "featuredMedia" });
  const status = useWatch({ control, name: "status" });

  const setSelectCategory = (value: any) => {
    setValue("category", value);
  };

  const setSelectTags = (value: any) => {
    setValue("tags", value);
  };

  const setContent = (content: string) => {
    setValue("content", content);
  };

  const setImage = (id: string) => {
    setValue("featuredMedia", id);
  };

  const setStatus = (id: string) => {
    setValue("status", id);
  };

  const handleGetTagAndCategory = async (type: string, setType: any) => {
    try {
      const result = await fetch(`${APP_URL}/admin/api/${type}`, {
        method: "GET",
      });

      if (!result.ok) {
        throw new Error("Error fetching");
      }

      const data = await result.json();
      setType(data.data);
    } catch (error) {
      alert("Error fetching");
    }
  };

  useEffect(() => {
    handleGetTagAndCategory("category", setCategories);
    handleGetTagAndCategory("tag", setTags);
  }, []);

  const sendRequest = async (method: string, data: any) => {
    try {
      data.slug = changeTextToSlug(data.title);
      data.author = session?.user._id;
      data.category = data.category._id;
      data.tags = data.tags.map((tag: any) => tag._id);

      const result = await fetch(`${APP_URL}/admin/api/blog`, {
        method,
        headers: {
          Authorization: "Bearer " + session?.user?.token,
        },
        body: JSON.stringify(data),
      });
      if (result.ok) {
        router.back();
      } else {
        alert("An error occurred!");
      }
    } catch (error) {
      alert("An error occurred!");
    }
  };

  const create = async (data: any) => {
    await sendRequest("POST", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(create)} className="w-full h-full">
        <div className="flex justify-end items-center mt-6">
          <ButtonLiner type="submit" loading={isSubmitting} className="text-sm">
            Save changes
          </ButtonLiner>
        </div>
        <div className="mt-12 flex flex-wrap">
          <div className="w-2/3 pr-8">
            <div className="mb-6">
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
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Public
                </label>
                <Dropdown
                  data={["PUBLISH", "PRIVATE"]}
                  dropdownSelected={status}
                  setDropdownSelected={setStatus}
                />
                {errors?.status?.message && (
                  <p className="text-sm text-red-500">
                    {errors?.status?.message as string}
                  </p>
                )}
              </div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Content
              </label>
              <Jodit content={content || ""} setContent={setContent} />
              {errors?.content?.message && (
                <p className="text-sm text-red-500">
                  {errors?.content?.message as string}
                </p>
              )}
            </div>
          </div>
          <div className="w-1/3">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <Dropdown
                data={categories}
                dropdownSelected={selectCategory}
                setDropdownSelected={setSelectCategory}
              />
              {errors?.category?._id?.message && (
                <p className="text-sm text-red-500">Category is required</p>
              )}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tags
              </label>
              <DropdownMultiSelect
                data={tags}
                dropdownSelected={selectTags}
                setDropdownSelected={setSelectTags}
              />
              {errors?.tags?.message && (
                <p className="text-sm text-red-500">
                  {errors?.tags?.message as string}
                </p>
              )}
            </div>
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
                      setImage("");
                    }}
                    className="text-sm cursor-pointer text-blue-500"
                  >
                    Remove
                  </span>
                </div>
              ) : (
                <>
                  {session?.user?.token ? (
                    <Dialog open={openGallery}>
                      <DialogTrigger asChild>
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
                                <span className="font-semibold">
                                  Click to upload
                                </span>
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
                      </DialogTrigger>

                      <DialogContent
                        className="w-2/3 h-4/5 max-w-full"
                        onClose={() => setOpenGallery(false)}
                      >
                        <Gallery
                          closeGallery={setOpenGallery}
                          setMediaId={setImage}
                        />
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="h-9" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
