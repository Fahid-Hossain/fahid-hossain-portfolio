import React, { useEffect, useState } from 'react';
import "./projectDetail.css"
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { _id } = useParams();

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/myFakeData.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    //exact project filter
    const exactProject = projects.find(pd => pd.id == _id);
    return (
        <div className="text-white bg-dark detail-section">
            <div className="container">
                <h1 className="mb-4">{exactProject?.name}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-dark text-white">
                            <img src={exactProject?.images?.third} className="card-img img-style" style={{ width: '100%', height: "80%" }} alt="..." />
                            {/* <div className="card-img-overlay">
                                <h3 className="card-title">Card title</h3>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div> */}
                        </div>

                    </div>
                    <div className="col-md-6">
                        <img src={exactProject?.images?.first} className="card-img img-style" style={{ width: '100%' }} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-6 text-start">
                                <h3>Website Features :</h3><hr />
                                <h6>1. {exactProject?.details?.first}</h6>
                                <h6>2. {exactProject?.details?.second}</h6>
                                <h6>3. {exactProject?.details?.third}</h6>
                                <h6>4. {exactProject?.details?.fourth}</h6>
                                <h6>5. {exactProject?.details?.fifth}</h6>
                                <h6>6. {exactProject?.details?.sixth}</h6>
                            </div>
                            <div className="col-12 col-md-6 text-start">
                            <h3>Uses Technologies :</h3><hr />
                                <h6>1. {exactProject?.stack?.first}</h6>
                                <h6>2. {exactProject?.stack?.second}</h6>
                                <h6>3. {exactProject?.stack?.third}</h6>
                                <h6>4. {exactProject?.stack?.fourth}</h6>
                                <h6>5. {exactProject?.stack?.fifth}</h6>
                                <h6>6. {exactProject?.stack?.sixth}</h6>
                                <h6>7. {exactProject?.stack?.seventh}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <img src={exactProject?.images?.fourth} className="card-img img-style" style={{ width: '100%' }} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;