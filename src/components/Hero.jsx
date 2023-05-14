// import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[url('./assets/hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}} className="relative bg-cover overflow-hidden  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="2xl:col-span-1 xl:col-span-3 lg:col-span-4 lg:order-1 lg:text-left text-center order-2 lg:mt-24 sm:-mt-1 -mt-2 z-20">
          <h2
            className="text-4xl tracking-tight text-white font-extrabold text-clrHeading sm:text-5xl md:text-6xl 2xl:text-7xl xl:text-6xl lg:text-5xl text-clrWhite"
            style={{ opacity: 1, transform: "none" }}
          >
            Adamjee Cantonment College BNCC Platoon
          </h2>
          <p
            className="text-base text-clrText text-white sm:text-lg md:text-lg mt-4 sm:mt-4 text-clrGray 2xl:text-xl xl:text-lg lg:text-md xl:max-w-xl lg:max-w-md mr-auto lg:mt-10"
            style={{ opacity: 1, transform: "none" }}
          >
            “Adamjee Cantonment College  BNCC Platoon” is a Club to inspire and empower students of
            Adamjee Cantonment College to be involved in in Bangladesh Army{" "}
          </p>
          <div className="rounded-full">
            <a
              href="#about"
              draggable="false"
              className=" flex items-center justify-center px-8 py-3 outline border-transparent text-base font-medium rounded-full bg-primary hover:bg-green-500 md:py-4 md:text-lg md:px-10 group w-56 mt-10 block lg:mx-0 mx-auto hover:-translate-y-1  border-2 border-green-400 text-emerald-300 hover:bg-emerald-500  hover:text-white bg-transparent xl:text-xl relative  font-medium rounded-full transition-all duration-200"
              style={{ opacity: 1, transform: "none" }}
            >
              Learn More
              <span className="ml-2 h-4 w-4 rounded-full group-hover:bg-white bg-green-500 animate-pulse "></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
