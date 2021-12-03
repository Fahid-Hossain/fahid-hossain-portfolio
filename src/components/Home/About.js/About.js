import React from 'react';
import "./About.css"
import fahid from "../../../../src/images/About-img.png"
import img from "../../../../src/images/dream-bg.png"

const About = () => {
    return (
        <div id="about" className="text-white bg-dark container pt-md-5">
            <img src={img} alt="" className="img-fluid" style={{ width: "4rem", float: "right" }} />
            <div className="row">
                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="col-12 col-md-6">
                    <img className="img-fluid" src={fahid} alt="" style={{ width: "100%" }} />
                </div>
                <div data-aos="flip-right" data-aos-anchor-placement="center-bottom" className="col-12 col-md-5">
                    <div className="about-img about-description">
                        <h1 className="pb-3">About Me</h1>
                        <p className="fs-6 text-start">Hi, I'm Fahid Hossain, a junior MERN Stack Developer. I am currently working REACT JS .I am comfortable with React JS. I have done many projects recently using React, Firebase, MongoDB, Node JS, and Express JS. I am also familiar with Context API, REST API , Node.js, MongoDb Atlas. I'm doing B.Sc in Mathematics under National University of Bangladesh . Now to achieve my ideal career, I would like to work for an organization where I can expand my skills and abilities.
                        </p>
                        {/* <button className="btn btn-primary">Read More</button> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;