import React from 'react';
import "./About.css"
import fahid from "../../../../src/images/About-img.png"
import img from "../../../../src/images/dream-bg.png"

const About = () => {
    return (
        <div id="about" className="text-white bg-dark about-section">
            <img src={img} alt="" className="img-fluid" style={{width:"4.5rem",float:"right"}} />
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={fahid} alt="" style={{width:"100%"}} />
                </div>
                <div className="col-12 col-md-5">
                    <div className="about-img about-description">
                    <h1>About Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim dolorem rerum libero alias temporibus quaerat totam illo quo tempora praesentium eum numquam, et officia hic ratione cum eveniet voluptas.</p>
                    <button className="btn btn-primary">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;