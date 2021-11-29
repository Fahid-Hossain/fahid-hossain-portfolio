import React from 'react';
import Navigation from '../../Navigation/Navigation';
import About from '../About.js/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="bg-dark vh-100">
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;