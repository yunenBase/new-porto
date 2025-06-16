import React from "react";
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><h2>Food Delivery App</h2></a>
                <p>Built a Food Delivery App UI using Flutter with dynamic data sourced from an API.</p>
            </div>
            <div className="project">
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><h2>Karamba Warning App</h2></a>
                <p>Created a Flutter-based monitoring app for pH and DO levels in a fish pond, integrated with IoT sensors and Firebase for real-time data tracking.</p>
            </div>
            <div className="project">
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><h2>Karamba Warning App</h2></a>
                <p>Developed a real-time Flutter application integrated with IoT sensors for monitoring ocean current and wave conditions. The system helps fishermen access live maritime data, improving safety and operational planning.</p>
            </div>
            <div className="project">
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><h2>HOPTIMA</h2></a>
                <p>Developed a mobile application to predict land and property prices in specific cities using content-based filtering. The machine learning model and API were deployed on Google Cloud, enabling scalable and reliable predictions accessible via the app.</p>
            </div>
            <div className="project">
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><img src={project5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ikhwan.com" target="_blank" rel="noreferrer"><h2>Sleep Monitoring System</h2></a>
                <p>Built a student sleep detection system using YOLO on Jetson Nano, with real-time monitoring through a Telegram bot and an admin website.</p>
            </div>
        </div> 
    </div>
    );
}

export default Project;