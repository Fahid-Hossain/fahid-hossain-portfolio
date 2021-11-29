import React from 'react';
import Typical from 'react-typical'
import "./Banner.css"
import img from '../../../images/fahid-bg.png'
import img2 from '../../../images/exp-bg.png'
const Banner = () => {
    return (
        <div className="mt-5">
            <img className="mt-5 pt-2" src={img2} alt="" style={{width:"3rem",float:"left"}} />
            <div className="row align-items-start">
                <div className="col-12 col-md-6 banner">
                    <span className="banner-welcome">Welcome to my world !</span>
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
                    </h2>

                    <a href="fahid-Hossain's-Resume.pdf" download="fahid-Hossain's-Resume.pdf"><button className="btn btn-outline-warning">Get Resume</button></a>
                </div>
                <div className="col-12 col-md-6 banner-img">
                    <img className="img-fluid" src={img} alt="" style={{width:"80%"}} />
                </div>
            </div>
        </div>
    );
};

export default Banner;