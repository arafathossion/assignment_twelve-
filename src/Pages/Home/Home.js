import React from 'react';
import Banner from './Banner';
import Footer from '../../Components/Footer'
import Reviews from './Reviews';
import Manufacturer_Tools from './Manufacturer_Tools';
import Blog from './Blog';
import NumberCounter from './NumberCounter';

const Home = () => {
    return (
        <div className='border-1 border-red-900 h-screen'>
            <Banner />
            <Manufacturer_Tools />
            <NumberCounter />
            <Blog />
            <Reviews />
            <div className="my-custom-style p-4 m-16">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.579673258529!2d90.45776985012469!3d23.690984996885845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b742ab26dbc3%3A0xa69ad65b6eb9f08a!2sLutfar%20Rahman%20Sarkari%20Prathamik%20Vidyalaya!5e0!3m2!1sen!2sbd!4v1653562178206!5m2!1sen!2sbd" width="600" height="550" style={{ width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </div>
    );
};

export default Home;