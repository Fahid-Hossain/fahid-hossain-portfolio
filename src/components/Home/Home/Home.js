import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="bg-dark">
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Home;