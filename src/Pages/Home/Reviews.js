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
import { useQuery } from "react-query";
import auth from '../../fierbase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Reviews = () => {
    const [user] = useAuthState(auth);
    const { isLoading, error, data: reviews } = useQuery('review', () =>
        fetch('http://localhost:5000/review').then(res =>
            res.json()
        )
    )
    // console.log(reviews)
    // console.log(user?.photoURL)
    return (
        <div>

            <div className='text-center pt-20'>
                <h1 className='text-3xl font-extrabold capitalize'>Millons business trust us</h1>
                <h4 className='text-3xl font-medium uppercase py-4 text-teal-500'>clients reviews</h4>
            </div>



            <div className='md:m-16 bg-main'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="my-custom-style"
                >



                    {
                        reviews?.map(review => <div className="hero bg-main py-0 " >
                            <SwiperSlide className="" key={review._id}>
                                <div className="hero-content flex-col lg:flex-row md:p-28">
                                    <div className="w-2/5 h-96 rounded-lg shadow-2xl bg-red-300 flex before:absolute before:-inset-1 before:-skew-y-[5deg] before:bg-sky-100 before:rounded-lg relative z-40">
                                        <img src={review?.image} className="z-50 w-4/5  h-80 block m-auto rounded-lg shadow-2xl" />
                                    </div>
                                    <div className='w-3/5 md:pl-10'>
                                        <h1 className="text-xl uppercase font-bold">{review?.title}</h1>
                                        <p className="py-6">{review?.about}</p>
                                        <div className='grid md:grid-cols-3 items-center'>
                                            <p className='text-2xl font-semibold text-teal-500'><span className='text-black '>Rating : </span>{review?.rating}</p>
                                            <div className='col-span-2 justify-self-center text-teal-600'>
                                                <h4 className='text-lg font-bold'>{review?.displayName}</h4>
                                                <h6>
                                                    <span className='text-sm capitalize font-bold'>{review?.company} &nbsp;</span>
                                                    <span className='text-lg font-bold uppercase'>{review?.designation}</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>)
                    }





                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;