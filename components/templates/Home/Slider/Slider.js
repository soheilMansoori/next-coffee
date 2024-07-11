// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Slider() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="carousel overlay-bottom">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: ".carousel-control-next",
            prevEl: ".carousel-control-prev",
            disabledClass: "swiper-button-disabled"
          }}
          className="carousel-inner"
        >
          <SwiperSlide>
            <img className="w-100" src="images/carousel-1.jpg" alt="carousel-1" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" src="images/carousel-2.jpg" alt="carousel-2" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* carousel-control-prev */}
        <a className="carousel-control-prev">
          <span className="carousel-control-prev-icon" />
        </a>
        {/* carousel-control-next */}
        <a className="carousel-control-next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  );
}

export default Slider;
