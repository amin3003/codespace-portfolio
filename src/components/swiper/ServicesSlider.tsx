import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ServicesSlider(props: any) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={false}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      style={{
        width: "100%",
        height: "100%",
        marginTop:"40px",
      }}
    >
      {props.data.map((r: any, i: any) => (
        <SwiperSlide
          key={i}
          className="bg-base-100"
          style={{ borderRadius: "0px", background: "none" }}
        >
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title">{r.name}</h2>
              <p>{r.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
