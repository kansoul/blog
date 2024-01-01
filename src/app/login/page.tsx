import ButtonLiner from "@/components/ui/button-liner";
import Image from "next/image";

export default function Login() {
  return (
    <div className="mx-auto text-center flex flex-col items-center relative">
      <p className="text-linear text-[45px] font-bold my-[50px]">
        Welcome back !
      </p>
      <form
        action=""
        className="w-full max-w-[420px] flex flex-col border border-[#c2d4ee] dark:border-[#222f43] bg-[#e8edf5] dark:bg-[#131c31] rounded-[16px] p-[30px] mb-"
      >
        <input
          type="text"
          className="placeholder-[#7E9CC7] bg-transparent border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none p-5 mb-6 dark:focus:border-[#66768f] "
          placeholder="User name"
        />
        <input
          type="password"
          className="placeholder-[#7E9CC7] bg-transparent border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none p-5 mb-6 dark:focus:border-[#66768f]"
          placeholder="Password"
        />
        <p className="text-sm text-[#344161] dark:text-[#b9e0f2] text-left mb-6">
          Forgot password?
        </p>
        <ButtonLiner className="w-full !py-3 hover:-translate-y-1 transition-transform duration-300 ease-in-out ">
          Login
        </ButtonLiner>
        <div className="text-sm text-left text-[#94A9C9] mt-6">
          <span className="">Don’t have an account? </span>
          <a href="" className="text-linear">
            Sign Up
          </a>
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
