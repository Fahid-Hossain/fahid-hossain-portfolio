import React from 'react';
import Navigation from '../../Navigation/Navigation';
import About from '../About.js/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className="bg-dark">
            <Navigation></Navigation>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;