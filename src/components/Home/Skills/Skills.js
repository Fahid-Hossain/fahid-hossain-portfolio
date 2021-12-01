import React from 'react';
import "./skills.css"

const Skills = () => {
    return (
        <div id="skills" className="text-dark skills-section">
            <h1 className="text-white mt-5">MY CORE SKILLS</h1>
            <hr className="text-white" />
            <div data-aos="fade-right" className="row ps-3">

                {/* ------------------- */}
                <div className="col-12 col-md-5 text-white mx-auto">
                    <div className="progress bg-dark my-2" data-aos="fade-right">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">70%</div>
                        <h6 className="mx-3"><i>HTML</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-left">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                        <h6 className="mx-3"><i>CSS3</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-up">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "70%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
                        <h6 className="mx-3"><i>JS</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-bottom">
                        <div className="progress-bar progress-bar-striped bg-warning text-dark" role="progressbar" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
                        <h6 className="mx-3"><i>React JS</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-right">
                        <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">40%</div>
                        <h6 className="mx-3"><i>Node JS</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-left">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "75%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
                        <h6 className="mx-3"><i>Express JS</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-bottom">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
                        <h6 className="mx-3"><i>MongoDB</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-up">
                        <div className="progress-bar progress-bar-striped bg-warning text-dark" role="progressbar" style={{ width: "65%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">65%</div>
                        <h6 className="mx-3"><i>Firebase</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-right">
                        <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: "95%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">95%</div>
                        <h6 className="mx-3"><i>Bootstrap5</i></h6>
                    </div>

                    <div className="progress bg-dark my-2" data-aos="fade-left">
                        <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: "49%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">50%</div>
                        <h6 className="mx-3"><i>Tailwind CSS</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-up">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "59%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">55%</div>
                        <h6 className="mx-3"><i>Metarial UI</i></h6>
                    </div>
                    <div className="progress bg-dark my-2" data-aos="fade-bottom">
                        <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: "75%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
                        <h6 className="mx-3"><i>Git & GitHub</i></h6>
                    </div>

                </div>



                {/* --------------------  */}
                <div className="col-12 col-md-6 me-3">
                    <div className="row">
                        <div className="col-6 col-sm-3 py-3 card-main">
                            <div className="card card-item">
                                <div className="card-body card-bg">
                                    <h5 className="card-title"><i className="fab fa-html5 fs-1"></i></h5>
                                    <p className="card-text card-title-style">HTML5</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 py-3">
                            <div className="card card-item-two">
                                <div className="card-body">
                                <h5 className="card-title"><i className="fab fa-css3-alt fs-1"></i></h5>
                                    <p className="card-text card-title-style">CSS3</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 py-3">
                            <div className="card">
                                <div className="card-body card-bg">
                                <h5 className="card-title"><i className="fab fa-node-js fs-1"></i></h5>
                                    <p className="card-text card-title-style">JavaSript</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 py-3">
                            <div className="card card-item">
                                <div className="card-body">
                                <h5 className="card-title"><i className="fab fa-react fs-1"></i></h5>
                                    <p className="card-text card-title-style">React JS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 py-3">
                            <div className="card card-item-two">
                                <div className="card-body card-bg">
                                <h5 className="card-title"><i className="fab fa-node fs-1"></i></h5>
                                    <p className="card-text card-title-style">Node JS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 py-3">
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-cogs fs-1"></i></h5>
                                    <p className="card-text card-title-style">Express</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 py-3">
                            <div className="card card-item-two">
                                <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-tasks fs-1"></i></h5>
                                    <p className="card-text card-title-style">MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 py-3">
                            <div className="card card-item">
                                <div className="card-body card-bg">
                                <h5 className="card-title"><i className="fas fa-fire-alt fs-1"></i></h5>
                                    <p className="card-text card-title-style">Firebase</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 py-3">
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title"><i className="fab fa-bootstrap fs-1"></i></h5>
                                    <p className="card-text card-title-style">Bootstrap5</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 py-3">
                            <div className="card card-item-two">
                                <div className="card-body card-bg">
                                <h5 className="card-title"><i className="fas fa-sync-alt fs-1"></i></h5>
                                    <p className="card-text card-title-style">Tailwind</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 py-3">
                            <div className="card card-item">
                                <div className="card-body">
                                <h5 className="card-title"><i className="fab fa-stack-overflow fs-1"></i></h5>
                                    <p className="card-text card-title-style">Material UI</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 py-3">
                            <div className="card">
                                <div className="card-body card-bg">
                                <h5 className="card-title"><i className="fab fa-github-square fs-1"></i></h5>
                                    <p className="card-text card-title-style">Github</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;