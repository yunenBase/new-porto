import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud, faLeaf,} from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Flutter",
    "Provider",
    "MVCC",
    "RESTful API",
    "Firebase",
    "SQLite",
    "Push & Local Notifications",
    "Git/Github",
    "React"
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
    "IoT",
    "YOLO"
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
                    <p>Developing modern mobile applications using Flutter with structured architecture (MVC/MVCC) and state management (Provider). Work with RESTful APIs, managing databases with both Firebase and local databases, implementing push and local notifications to enhance user engagement. Experienced in team collaboration using Git/GitHub (Gitflow), integrating applications with machine learning models, and connecting mobile apps with IoT/embedded devices. Also experienced developing modern website using React.js</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud & Machine Learning</h3>
                    <p>Managing cloud infrastructure on GCP and Azure, with experience in CI/CD pipelines, compute & storage services, and containerization with Docker. Skilled in basic Kubernetes and Infrastructure as Code (IaC), deploying applications to Cloud Run, App Engine, and Cloud Functions, and automating workflows with shell scripting. On the ML side, experienced in KNN, CNN, and YOLO-based computer vision models, and deploying them to edge devices like Jetson Nano or RaspberryPi.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLeaf} size="3x"/>
                    <h3>Leadership & Team Management</h3>
                    <p>Proven ability to lead teams of various sizes, including under tight deadlines and high-pressure situations. Experienced in breaking down complex projects into manageable tasks, coordinating team workflows, and ensuring collective success. Skilled in building strategic relationships through effective diplomacy and capable of making critical decisions to drive progress in challenging circumstances.</p>
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