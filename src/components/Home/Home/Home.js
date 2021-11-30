import React from 'react';
import Navigation from '../../Navigation/Navigation';
import About from '../About.js/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className="bg-dark">
            <Navigation></Navigation>
            <Banner></Banner>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;