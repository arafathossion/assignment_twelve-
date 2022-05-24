import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Banner() {


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper h-screen bg-red-800"
      >





        <SwiperSlide className="swiper-banner-slide">
            <img src="https://images.unsplash.com/photo-1426927308491-6380b6a9936f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NyZXdkcml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-banner-slide">
            <img src="https://images.unsplash.com/photo-1603227756386-6da8d06e2bb5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2NyZXdkcml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-banner-slide">
            <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjcmV3ZHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-banner-slide">
            <img src="https://images.unsplash.com/photo-1505946061903-08cfdc4028d3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNjcmV3ZHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-banner-slide">
            <img src="https://images.unsplash.com/photo-1581244250633-ebf0f5609f6f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNjcmV3ZHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-banner-slide">
            <img src="https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjcmV3ZHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
