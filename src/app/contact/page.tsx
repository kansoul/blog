import ButtonLiner from "@/components/ui/button-liner";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12">
        <div className="mt-[70px]">
          <div className="w-5/6 mx-auto">
            <p className="mb-[30px] text-linear text-[64px] font-extrabold text-center">
              Contact Us
            </p>
            <p className="text-[20px] text-[#708ab0] dark:text-[#94a9c9] text-center">
              We&apos;re a passionate team devoted to web development. Our
              designs blend pixel-perfect precision with top-notch coding,
              ensuring speed, security, and SEO-friendliness. Your satisfaction
              is our commitment as we pursue perfection in every web design
              project.
            </p>
            <div className="text-center text-[#708ab0] dark:text-[#94a9c9] flex flex-wrap items-center justify-center mt-[30px] gap-x-4">
              <div className="flex items-center">
                <Image
                  src="/icons/contact.svg"
                  alt="Contact"
                  width={40}
                  height={40}
                />
                <p className="pl-2">(84) 378999262</p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icons/address.svg"
                  alt="Contact"
                  width={40}
                  height={40}
                />
                <p className="pl-2">Da Nang City, Viet Nam</p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icons/send.svg"
                  alt="Contact"
                  width={40}
                  height={40}
                />
                <p className="pl-2">hodoanit@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-[70px] mb-[50px] w-full rounded-[16px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.28264315394!2d107.91331315920887!3d16.071745990768637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1704033385921!5m2!1svi!2s"
              width="100%"
              height="550px"
              className="rounded-[16px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center mb-[50px]">
            <p className="mb-2.5 text-linear text-[32px] font-bold">
              Drop Us a Line
            </p>
            <p className="text-sm text-[#708ab0] dark:text-[#94a9c9]">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form action="" className="flex flex-wrap gap-6 mt-[50px]">
              <input
                type="text"
                className="block w-[calc(50%-12px)] p-5 placeholder-[#7E9CC7] dark:bg-[#131c31] border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none"
                placeholder="Your name *"
                required
              />
              <input
                type="email"
                className="block w-[calc(50%-12px)] p-5 placeholder-[#7E9CC7] dark:bg-[#131c31] border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none"
                placeholder="Email *"
                required
              />
              <input
                type="text"
                className="block w-[calc(50%-12px)] p-5 placeholder-[#7E9CC7] dark:bg-[#131c31] border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none"
                placeholder="Phone number"
                required
              />
              <input
                type="Subject *"
                className="block w-[calc(50%-12px)] p-5 placeholder-[#7E9CC7] dark:bg-[#131c31] border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none"
                placeholder="Search"
                required
              />
              <textarea
                placeholder="Message *"
                id=""
                className="block w-full p-5 placeholder-[#7E9CC7] dark:bg-[#131c31] border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none"
                rows={5}
              />
              <div className="w-full text-center">
                <ButtonLiner className="!px-[30px] !py-4 me-0 text-base">
                  Submit -&gt;
                </ButtonLiner>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
