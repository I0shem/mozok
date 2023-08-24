import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Images/s1.jpg";
import Image2 from "../Images/s2.jpg";
import Image3 from "../Images/s3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s from "./SwiperBox.module.css";
import "./SwiperBox.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className={s.smallSwiperContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false} //кастомізувати кнопки
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={s.mySmallSwiper}
      >
        <SwiperSlide className={s.swiperSlide}>
          <img src={Image1} alt="picture1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperSlide}>
          <img src={Image2} alt="picture1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide swiperSlideclassName={s.swiperSlide}>
          <img src={Image3} alt="picture1" loading="lazy" />
        </SwiperSlide>
        <div className={s.autoplayProgress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
