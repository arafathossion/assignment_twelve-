import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlogs] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/blogs/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blog)
    return (

        <div className='px-20 py-10'>            
            <h1 className='text-2xl uppercase'>Author , <br /> {blog?.author}</h1>
            <h1 className='text-2xl capitalize text-teal-500 font-medium py-6'>{blog?.question}</h1>
            <p className='text-md text-[rgba(0,0,0,.5)] font-medium'>{blog?.short_description}</p>
            <div>
                {
                     blog?.detail?.map(details =><>
                        <h1 className='text-red-500 font-semibold my-4 text-lg'>{details.title}</h1>
                        <p className='text-md text-[rgba(0,0,0,.5)] font-medium'>{details.description}</p>
                        </>)
                }
            </div>

            <ul>{blog?.tags?.map(tag => <li className='inline-block m-4 mt-6 bg-main p-4 my-custom-style capitalize text-teal-500 font-extrabold'>#{tag}</li>)}</ul>
        </div>

    );
};

export default SingleBlog;