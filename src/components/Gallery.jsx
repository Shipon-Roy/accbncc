// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";
import img10 from "../assets/gallery/img10.jpg";
import img11 from "../assets/gallery/img11.jpg";
import img12 from "../assets/gallery/img12.jpg";
import img13 from "../assets/gallery/img13.jpg";
import img14 from "../assets/gallery/img14.jpg";
import img15 from "../assets/gallery/img15.jpg";
import img16 from "../assets/gallery/img16.jpg";
import img17 from "../assets/gallery/img17.jpg";
import img18 from "../assets/gallery/img18.jpg";
import img19 from "../assets/gallery/img19.jpg";
import img20 from "../assets/gallery/img20.jpg";
import img21 from "../assets/gallery/img21.jpg";
import img22 from "../assets/gallery/img22.jpg";
import img23 from "../assets/gallery/img23.jpg";
import img24 from "../assets/gallery/img24.jpg";
import img25 from "../assets/gallery/img25.jpg";
import img26 from "../assets/gallery/img26.jpg";
import img27 from "../assets/gallery/img27.jpg";
import img28 from "../assets/gallery/img28.jpg";
import img29 from "../assets/gallery/img29.jpg";
import img30 from "../assets/gallery/img30.jpg";
import img31 from "../assets/gallery/img31.jpg";
import img32 from "../assets/gallery/img32.jpg";
import img33 from "../assets/gallery/img33.jpg";
import img34 from "../assets/gallery/img34.jpg";
import img35 from "../assets/gallery/img35.jpg";
import img36 from "../assets/gallery/img36.jpg";

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="container mx-auto py-16 pb-0">
        <div className="grid mt-20 place-items-center pb-10">
          <h2 className="text-4xl tracking-tight font-extrabold text-clrHeading sm:text-5xl md:text-6xl flex items-center">
            <div className="h-4 w-4 rounded-full bg-clrHeading"></div>
            <div>Gallery</div>
          </h2>
          <hr className="w-20 h-3 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2" />
          <p className="text-clrText text-center font-semibold ">
            Welcome To Our Gallery
          </p>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img13} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img14} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img15} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img16} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img17} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img18} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img19} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img20} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img21} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img22} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img23} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img24} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img25} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img26} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img27} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img28} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img29} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img30} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img31} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img32} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img33} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img34} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img35} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img36} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
