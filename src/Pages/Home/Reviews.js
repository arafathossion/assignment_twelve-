import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Reviews = () => {
    return (
        <>

            <div className='md:p-40 bg-main'>
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
                    className="my-custom-style"
                    >




                    <div class="hero bg-main py-0 ">
                        <SwiperSlide className="">
                            <div class="hero-content flex-col lg:flex-row md:p-28">
                                <div class="w-2/5 h-96 rounded-lg shadow-2xl bg-red-300 flex before:absolute before:-inset-1 before:-skew-y-[5deg] before:bg-sky-100 before:rounded-lg relative z-40">
                                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="z-50 w-4/5  h-80 block m-auto rounded-lg shadow-2xl" />
                                </div>
                                <div className='w-3/5 md:pl-10'>
                                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn bg- text-black border-white">Get Started</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div class="hero bg-main py-0 ">
                        <SwiperSlide className="">
                            <div class="hero-content flex-col lg:flex-row md:p-28">
                                <div class="w-2/5 h-96 rounded-lg shadow-2xl bg-red-300 flex before:absolute before:-inset-1 before:-skew-y-[5deg] before:bg-sky-100 before:rounded-lg relative z-40">
                                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="z-50 w-4/5  h-80 block m-auto rounded-lg shadow-2xl" />
                                </div>
                                <div className='w-3/5 md:pl-10'>
                                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn bg-main text-black border-white">Get Started</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div class="hero bg-main py-0 ">
                        <SwiperSlide className="">
                            <div class="hero-content flex-col lg:flex-row md:p-28">
                                <div class="w-2/5 h-96 rounded-lg shadow-2xl bg-red-300 flex before:absolute before:-inset-1 before:-skew-y-[5deg] before:bg-sky-100 before:rounded-lg relative z-40">
                                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="z-50 w-4/5  h-80 block m-auto rounded-lg shadow-2xl" />
                                </div>
                                <div className='w-3/5 md:pl-10'>
                                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn bg-main text-black border-white">Get Started</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>


                {/* <div class="hero bg-main py-0 second-neumorphism">
                    <div class="hero-content flex-col lg:flex-row md:p-28">
                        <div class="basis-2/5 h-96 rounded-lg shadow-2xl bg-sky-300 flex before:absolute before:-inset-1 before:-skew-y-[5deg] before:bg-main before:rounded-lg relative -z-50">
                            <img src="https://api.lorem.space/image/movie?w=260&h=400" class="z-50 w-4/5  h-80 block m-auto rounded-lg shadow-2xl" />
                        </div>
                        <div className='basis-3/5 md:pl-10'>
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn bg-main border-white">Get Started</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Reviews;