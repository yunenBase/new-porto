import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faAndroid, faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud, faGear, faLeaf, faMobile } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Flutter",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flask",
    "SQL",
    "Firebase",
    "Postman"
];

const labelsSecond = [
    "GCP",
    "Azure",
    "Docker",
    "Python",
    "OpenCV",
    "Linux",
    "PyTorch",
    "TensorFlow",
];

const labelsThird = [
    "Leadership",
    "Decision Making",
    "Task Delegation",
    "Time Management",
    "Public Speaking",
    "Critical Thinking",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Software Development</h3>
                    <p>Experienced in building modern mobile applications using Flutter, with solid skills in working with RESTful APIs and integrating mobile apps with various IoT devices to create smart and responsive systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud & Machine Learning</h3>
                    <p>Experienced in managing cloud infrastructure on GCP and Azure, deploying and automating ML workflows with Cloud Run, and implementing YOLO-based computer vision models on edge devices like Jetson Nano.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLeaf} size="3x"/>
                    <h3>Leadership & Team Management</h3>
                    <p>Proven ability to lead teams of various sizes, streamline workflows, and drive collective success through effective team coordination and goal-focused management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Main Skill:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;