import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { LuSendHorizontal } from 'react-icons/lu'
import { Button } from "./Button";

export function Contact() {
  return (
    <>
      <section className="px-8 py-24 max-screen container md:py-lg md:pt-sm flex flex-col items-center gap-8 overflow-x-hidden sm:flex-row md:gap-16">
        <div className="flex flex-col w-full">
          <h2 className="font-black lg:text-nowrap text-4xl relative before:absolute before:w-8 before:rounded-lg before:-top-5 before:bg-primary before:h-2">
            Contact me
          </h2>

          <div className="w-full flex justify-between gap-16 mt-8">
            <div className="flex flex-col gap-8">
              <p>
                Feel free to to contact me any time,<br></br> my inbox is always
                open, and I'm always happy to connect or help if I can.
              </p>

              <div className="flex flex-col gap-1">
                <span>
                  <span className="font-black">NIP:</span>
                  <span> 5060127126</span>
                </span>

                <span>
                  <span className="font-black">REGON:</span>
                  <span> 540383170</span>
                </span>
              </div>

              <div className="flex gap-6 text-2xl">
                <SiGithub />
                <SiLinkedin />
                <SiX />
                <SiInstagram />
              </div>
            </div>

            <div className="flex flex-col items-center gap-6"></div>
            <form
              className="w-full"
              action={`https://formsubmit.co/${"mail@michaldziuba.dev"}`}
              method="POST"
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4">
                  <input
                    className="bg-white p-4 rounded-lg focus:border-primary border-gray-300 focus:ring-primary focus:outline-none border-2"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    className="bg-white p-4 rounded-lg focus:border-primary border-gray-300  focus:ring-primary focus:outline-none border-2"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                  />
                  <input
                    className="bg-white p-4 rounded-lg focus:border-primary border-gray-300  focus:ring-primary focus:outline-none border-2"
                    placeholder="Subject"
                    name="_subject"
                    required
                  />
                </div>
                <div className="flex md:col-span-2 gap-4">
                  <textarea
                    className="bg-white border-gray-300 p-4 w-full rounded-lg min-h-60 md:min-h-full focus:border-primary focus:ring-primary focus:outline-none border-2"
                    placeholder="Your message"
                    name="message"
                    required
                  />
                </div>
              </div>

              <div className="w-full flex justify-end mt-8">
                <Button variant="black">Send email <LuSendHorizontal className="w-[18px] h-[18px]" /></Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="mb-16 max-screen container flex flex-col items-center justify-center">
        <h3 className="mt-4 font-semibold text-center text-lg md:text-xl">
          Want to send an email directly? Write to:
        </h3>
        <div className="w-full flex justify-center mt-3">
          {" "}
          <a
            href="mailto:mail@michaldziuba.dev"
            className="break-all font-black hover:text-primary inline-block text-center text-xl md:text-3xl"
          >
            {" "}
            mail@michaldziuba.dev{" "}
          </a>{" "}
        </div>
      </div>
    </>
  );
}
