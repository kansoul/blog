"use client";

import ButtonLiner from "@/components/ui/button-liner";
import { loginSchema } from "@/schema/userSchema";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputForm from "@/components/Base/Form/InputForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AlertError from "@/components/Base/Alert";
import useLogout from "@/hooks/useLogout";

export default function Login() {
  const router = useRouter();
  const param = useSearchParams();
  const registerSuccess = param.get("success");
  const { handleLogout } = useLogout();

  const [showMessageError, setShowMessageError] = useState<string>(
    registerSuccess || param.get("message") || ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const login = async (data: any) => {
    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    return result?.status === 200
      ? router.push("/")
      : setShowMessageError("Username or password incorrect!");
  };

  useEffect(() => {
    if (showMessageError) {
      handleLogout();
    }
  }, []);

  return (
    <div className="mx-auto text-center flex flex-col items-center relative">
      <p className="text-linear text-[45px] font-bold my-[50px]">
        Welcome back !
      </p>
      {showMessageError && (
        <AlertError
          type={registerSuccess ? "success" : "error"}
          message={showMessageError}
          showAlert={setShowMessageError}
        />
      )}
      <form
        onSubmit={handleSubmit(login)}
        className="w-full max-w-[420px] flex flex-col border border-[#c2d4ee] dark:border-[#222f43] bg-[#e8edf5] dark:bg-[#131c31] rounded-[16px] p-[30px]"
      >
        <InputForm
          error={errors?.username?.message}
          register={register}
          name="username"
          type="text"
          placeholder="User name"
        />
        <InputForm
          error={errors?.password?.message}
          register={register}
          name="password"
          type="password"
          placeholder="Password"
        />
        <p className="text-sm text-[#344161] dark:text-[#b9e0f2] text-left mb-6">
          Forgot password?
        </p>
        <ButtonLiner
          type="submit"
          loading={isSubmitting}
          className="w-full !py-3 hover:-translate-y-1 transition-transform duration-300 ease-in-out "
        >
          Login
        </ButtonLiner>
        <div className="text-sm text-left text-[#94A9C9] mt-6">
          <span className="">Don’t have an account? </span>
          <Link href="/auth/register" className="text-linear">
            Sign Up
          </Link>
        </div>
      </form>
      <div className="relative mx-auto my-[30px] w-full max-w-[420px] before:content-[''] before:w-[90%] before:h-[2px] before:bg-[#222f43] before:absolute before:top-[10px] before:left-0 before:right-0 before:z-1 before:mx-auto">
        <span className="relative -top-0.5 z-[2] py-[5px] px-2.5 bg-[#f9fbff] dark:bg-[#0f172a] text-[#94A9C9] text-sm">
          Or, sign in with your email
        </span>
      </div>
      <div className="flex items-center justify-center w-full max-w-[420px]">
        <button className="w-full flex items-center justify-center py-2 gap-2  border border-[#c2d4ee] dark:border-[#222f43] bg-[#e8edf5] dark:bg-[#131c31] rounded-[16px] hover:-translate-y-1 transition duration-300 ease-in-out">
          <Image
            className="w-6 h-6"
            src="/icons/google.svg"
            loading="lazy"
            alt="Google logo"
            width={6}
            height={6}
          />
          <span className="text-[#344161] dark:text-[#b9e0f2]">
            Login with Google
          </span>
        </button>
      </div>
    </div>
  );
}
