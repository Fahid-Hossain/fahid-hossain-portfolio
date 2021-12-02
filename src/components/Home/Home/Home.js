import React from 'react';
import About from '../About.js/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../projects/Projects';
import Skills from '../Skills/Skills';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    return (
        <div className="bg-dark">
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <MessengerCustomerChat
                pageId="100607355808550"
                appId="3131763817066329"
            />
        </div>
    );
};

export default Home;