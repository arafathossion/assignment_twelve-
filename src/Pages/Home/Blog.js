import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://serene-hamlet-44786.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs)
    return (
        <div className='px-16'>

            <div className='text-center pb-20'>
                <h1 className='text-3xl font-extrabold capitalize'>Millons business trust us</h1>
                <h4 className='text-3xl font-medium uppercase py-4 text-teal-500'>our blog</h4>
            </div>



            <Swiper
                slidesPerView={3}
                spaceBetween={30}
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
                className="my-custom-style h-auto"
            >
                {
                    blogs?.map(blog => <SwiperSlide className='h-auto'>
                        <div class="card card-compact my-custom-style">
                            <figure><img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="Shoes" className='p-4' /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{blog?.author}</h2>
                                <h2 class="text-md font-medium">{blog?.question.slice(0, 50)} ....</h2>
                                <p>{blog?.short_description.slice(0, 200)} ....</p>
                                {/*
                                {
                                   
                                } */}
                                <div class="card-actions justify-end">
                                    <Link to={`/blog/${blog?._id}`} class="btn bg-main my-custom-style text-teal-500 border-0">Read More!</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Blog;