const Footer = () => {
  return (
    <>
      <footer className="bg-[#241f74] from-gradientLightBlue to-gradientBlue">
        <div className="container mx-auto py-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold sm:text-xl mb-10 text-white ">
                  Adamjee Cantonment College BNCC Platoon
                </h2>
                {/* <p className="text-base text-clrText sm:text-lg md:text-lg mt-4 sm:mt-4 text-gray-300">
                  Excel your IT Skills with us
                </p> */}
                <div className="flex mt-4 flex-row md:justify-start justify-center flex-wrap">
                  <a
                    name="Linkedin"
                    title="Linkedin"
                    href=""
                    className="h-8 w-8 hover:bg-sky-100 bg-gray-100 rounded-full grid place-items-center md:mr-4 md:mx-0 mx-auto md:text-3x text-lg  text-purple-500"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                  <a
                    name="Google"
                    title="Google"
                    href="mailto:itclub@acc.edu.bd"
                    className="h-8 w-8 hover:bg-sky-100 bg-gray-100 rounded-full grid place-items-center md:mr-4 md:mx-0 mx-auto md:text-3x text-lg  text-yellow-400"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 488 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                  </a>
                  <a
                    name="Youtube"
                    title="Youtube"
                    href=""
                    className="h-8 w-8 hover:bg-sky-100 bg-gray-100 rounded-full grid place-items-center md:mr-4 md:mx-0 mx-auto md:text-3x text-lg  text-red-600"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    name="Facebook"
                    title="Facebook"
                    href="https://www.facebook.com/acc.bncc"
                    className="h-8 w-8 hover:bg-sky-100 bg-gray-100 rounded-full grid place-items-center md:mr-4 md:mx-0 mx-auto md:text-3x text-lg  text-blue-500"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                  <a
                    name="Instagram"
                    title="Instagram"
                    href=""
                    className="h-8 w-8 hover:bg-sky-100 bg-gray-100 rounded-full grid place-items-center md:mr-4 md:mx-0 mx-auto md:text-3x text-lg  text-pink-600"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="justify-self-center">
              <h2 className="text-2xl text-white font-medium md:text-left text-center">
                Quick Links
              </h2>
              <div className="flex md:flex-col flex-row md:justify-start justify-center mt-4 flex-wrap">
                <a
                  href="#hero"
                  className="text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 hover:text-green-200"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 hover:text-green-200"
                >
                  History
                </a>
                <a
                  href="#sector"
                  className="text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 hover:text-green-200"
                >
                  Sectors
                </a>
                <a
                  href="#gallery"
                  className="text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 hover:text-green-200"
                >
                  Gallery
                </a>
                <a
                  href="#contactus"
                  className="text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 hover:text-green-200"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:justify-self-end justify-self-center">
              <h2 className="text-2xl text-white md:text-left text-center">
                Contact
              </h2>
              <div className="flex flex-col  md:justify-start justify-center mt-4">
                <p className="md:text-left text-center text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 ">
                  Phone Number: 01754042898
                </p>
                <p className="md:text-left text-center text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 ">
                  Mail: accbncc@gmail.com
                </p>
                <p className="md:text-left text-center text-lg  no-underline md:mx-0 md:mr-2 md:p-0 px-2 mx-auto text-slate-200 ">
                  Address: Adam jae Cantonment College Dhaka Cantonment, Dhaka-
                  1206,Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
