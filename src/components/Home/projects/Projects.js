import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./projects.css"

const Projects = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("./myFakeData.json")
            .then(res => res.json())
            .then(data => {
                setMyData(data);
            })
    }, [])
    return (
        <div id="projects" className="text-white mt-5 mb-3 container pt-md-5">
            <h1 className="mb-0 mt-5"><i>Recent Projects</i></h1>
            <hr />

            <div className="row mb-2 px-3">

                {
                    myData.map(data =>
                        <div className="col-12 col-md-6" data-aos="zoom-in-up">
                            <div className="card flex-md-row mb-4 box-shadow h-md-250 project">
                                <div className="card-body d-flex flex-column align-items-start projects-bg">
                                    <strong className="d-inline-block mb-2 text-primary">{data?.stack?.type}</strong>
                                    <h4 className="mb-0">
                                        <a className="text-dark" href="#">{data?.name}</a>
                                    </h4>
                                    <div className="mb-1 text-muted">{data?.date}</div>
                                    <p className="card-text mb-auto text-secondary">{data?.description}</p>
                                    <div className="pt-2">

                                        <Button className="btn btn-outline-primary"><a href={data?.links?.liveSite} className="text-decoration-none ancor" rel="noreferrer" target="_blank">Live site</a></Button>
                                        <Button className="btn btn-outline-secondary mx-1 "><a className="text-decoration-none ancor" href={data?.links?.githubClient} rel="noreferrer" target="_blank">Github</a></Button>
                                        <Link to={`/projectDetail/${data?.id}`}>
                                            <Button className="btn btn-secondary mx-1 mt-1">Details</Button>
                                        </Link>
                                    </div>
                                </div>

                                <img className="img-fluid project-img" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={data?.images?.banner} data-holder-rendered="true" />
                            </div>
                        </div>

                    )

                }

            </div>

        </div>
    );
};

export default Projects;