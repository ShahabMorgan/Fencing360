import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Main.scss";
import "swiper/css/autoplay";
import Skeleton from "@mui/material/Skeleton";
import image1 from "../../images/main/1.jpg";
import image2 from "../../images/main/2.jpg";
import image3 from "../../images/main/3.jpg";
import image4 from "../../images/main/4.jpg";

function reSize(func) {
  window.matchMedia("(max-width: 1280px)").matches ? func(2) : func(3);
  window.matchMedia("(max-width: 550px)").matches && func(1);
}

function Main() {
  const [picCount, setCount] = useState();
  const images = [image1, image2, image3, image4];
  useGSAP(() => {
    gsap.fromTo(".main", {opacity: 0}, {opacity: 1, duration: 1});
  });

  useEffect(() => {
    reSize(setCount);
  }, []);

  return (
    <div className="flex-1 main bg-Background">
      {picCount && (
        <Swiper
          onResize={() => {
            reSize(setCount);
          }}
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          minimumVelocity={0.2}
          autoplay={{
            delay: 3500,
          }}
          slidesPerView={picCount}
          spaceBetween={10}
          className="mySwiper "
        >
          {images.map((image) => (
            <SwiperSlide>
              <img src={image} loading="lazy" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Main;
