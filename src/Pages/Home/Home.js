import React from 'react';
import Banner from './Banner';
import Footer from '../../Components/Footer'
import Reviews from './Reviews';
import Manufacturer_Tools from './Manufacturer_Tools';

const Home = () => {
    return (
        <div className='border-1 border-red-900 h-screen'>
            <Banner/>
            <Manufacturer_Tools/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;