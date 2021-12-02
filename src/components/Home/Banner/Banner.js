import React, { useEffect } from 'react';
import Typical from 'react-typical'
import "./Banner.css"
import img from '../../../images/fahid-bg.png'
import img2 from '../../../images/exp-bg.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);
    return (
        <div id="home" className="mt-5">
            <img className="mt-5 pt-2 img-fluid" src={img2} alt="" style={{ width: "3rem", float: "left" }} />
            <div className="row align-items-start">
                <div data-aos="flip-left" className="col-12 col-md-6 banner">
                    <span className="text-white">Welcome to my world !</span>
                    <h1 className="text-warning">Hi, I am Fahid Hossain</h1>
                    <h2 className="banner-developer">
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Web Developer",
                                1000,
                                "MERN Stack Developer",
                                1000,
                                "React Developer",
                                1000,
                            ]}
                        >
                        </Typical>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fahid-hossain/"><i className="fab fa-linkedin px-2 fs-2"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Fahid-Hossain"><i className="fab fa-github px-2 fs-2"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://join.skype.com/invite/xbRGUklEnesf"><i className="fab fa-skype px-2 fs-2"></i></a>
                    </h2>

                    <a href="https://drive.google.com/file/d/169fA27isTLumEzJI74cQ3TNtJeJ0Rj9X/view?usp=sharing" download="fahid-Hossain's-Resume.pdf"><button className="btn btn-outline-warning">Get Resume</button></a>
                    <a href="#contact"><button className="btn btn-outline-info mx-2">Hire me</button></a>
                </div>
                <div data-aos="zoom-in-left" className="col-12 col-md-6 banner-img">
                    <img className="img-fluid" src={img} alt="" style={{ width: "80%" }} />
                </div>
            </div>
        </div>
    );
};

export default Banner;