"use client";

import CreateUpdateModal from "@/components/CreateUpdateModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { deleteTag, getTags } from "@/services/tag";
import { Tag } from "@/types/Tag";
import { srcImage } from "@/utils/image";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TagManagement() {
  const { data: session } = useSession();
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagUpdate, setTagUpdate] = useState<Tag | null>(null);
  const [openTagModal, setOpenTagModal] = useState<boolean>(false);

  const handleGetTags = async () => {
    const result = await getTags();
    setTags(result);
  };

  useEffect(() => {
    if (session?.user?.token) handleGetTags();

    // eslint-disable-next-line
  }, [session]);

  const refetchData = () => {
    setOpenTagModal(false);
    setTagUpdate(null);
    handleGetTags();
  };

  const removeTag = async (id: string) => {
    const result = await deleteTag(id, session?.user?.token || "");
    refetchData();
  };

  return (
    <div className="w-full">
      <div className="w-full mb-10 flex justify-end">
        {session?.user?.token ? (
          <Dialog open={openTagModal}>
            <DialogTrigger asChild>
              <button
                type="button"
                onClick={() => setOpenTagModal(true)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <svg>
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </svg>
                Add Tag
              </button>
            </DialogTrigger>

            <DialogContent
              onClose={() => setOpenTagModal(false)}
              className="w-auto p-6 max-h-screen"
            >
              {tagUpdate ? (
                <CreateUpdateModal
                  token={session?.user?.token}
                  refetch={refetchData}
                  type="tag"
                  itemUpdate={tagUpdate}
                />
              ) : (
                <CreateUpdateModal
                  type="tag"
                  token={session?.user?.token}
                  refetch={refetchData}
                />
              )}
            </DialogContent>
          </Dialog>
        ) : (
          <div className="h-9" />
        )}
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="w-[5%] p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          aria-describedby="checkbox-1"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="w-[15%] p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Tag Name
                    </th>
                    <th
                      scope="col"
                      className="w-[25%] p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Slug
                    </th>
                    <th
                      scope="col"
                      className="w-[30%] p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {tags &&
                    tags.length > 0 &&
                    tags.map((val, index) => (
                      <tr
                        key={`Product ${index}`}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="w-[5%] p-4">
                          <div className="flex items-center">
                            <input
                              id={`checkbox-${index}`}
                              aria-describedby="checkbox-1"
                              type="checkbox"
                              className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor={`checkbox-${index}`}
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="w-[15%] p-4 text-sm font-normal text-gray-500 whitespace-pre dark:text-gray-400">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">
                            <data value="name">{val?.name}</data>
                          </div>
                        </td>
                        <td className="w-[25%] p-4 text-sm font-normal text-gray-500 whitespace-pre dark:text-gray-400">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">
                            <data value="name">{val?.slug}</data>
                          </div>
                        </td>
                        <td className="w-[30%] h-[150px] p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <Image
                            alt={val?.name}
                            src={srcImage(val?.featuredMedia)}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="object-cover w-auto h-full transform transition-transform duration-300 peer-hover:scale-110"
                          />
                        </td>

                        <td className="p-4 space-x-2 whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => {
                              setTagUpdate(val);
                              setOpenTagModal(true);
                            }}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <svg>
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                  fillRule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </svg>
                            Update
                          </button>
                          <button
                            type="button"
                            onClick={() => removeTag(val?._id)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Delete item
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
