import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Gold Medal</h3>
            <h4 className="vertical-timeline-element-subtitle">Idea & Regeneration Expo 19th at MSU Malaysia</h4>
            <li>
              Developed a student drowsiness detection and alert system using computer vision, implemented on Jetson Nano
            </li>
            <li>
              Fine-tuned and converted YOLO models to optimize and enhance acceleration object detection performance
            </li>
            <li>
              Optimized CPU and CUDA GPU configurations to improve inference performance
            </li>
            <li>
              Utilized Firestore as the database for detection results
            </li>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2024 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Computing Cohort</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangkit Academy</h4>
            <li>
              Managing cloud infrastructure on GCP and Azure, including compute, storage, and networking services.
            </li>
            <li>
              Building and deploying applications with Docker, Cloud Run, App Engine, and Cloud Functions.
            </li>
            <li>
              Working with production-level Kubernetes for container orchestration and scalability.
            </li>
            <li>
              Applying Infrastructure as Code (Terraform) to automate provisioning and resource management.
            </li>
            <li>
              Implementing CI/CD pipelines to streamline deployment workflows.
            </li>
            <li>
              Gaining awareness of Cloud Security & DevSecOps, ensuring best practices for IAM and secure deployments.
            </li>
            <li>
              Exploring MLOps practices such as end-to-end pipeline design and model monitoring.
            </li>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - March 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Comentor</h4>
            <li>
              Wrote maintainable code and developed reusable widgets for future use 
            </li>
            <li>
              Collaborated with a team of 3 members and 1 mentor to develop required applications 
            </li>
            <li>
              Served as Project Manager in a real-world project simulation with a team of 9 members 
            </li>
            <li>
              Working with REST API and state management
            </li>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2023 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Governor</h3>
            <h4 className="vertical-timeline-element-subtitle">BEM KM FTI</h4>
            <li>
              Led 11 divisions comprising 78 members, executing impactful programs that positively influenced the surrounding community, and established strategic partnerships with both internal and external campus stakeholders to improve services for all students. 
            </li>
            <li>
              Successfully collaborated with Epsindo, Apple Developer Academy, and Wikimedia Indonesia
            </li>
            <li>
              Initiated activities aimed at enhancing students’ soft and hard skills
            </li>
            <li>
              Fostered effective communication between students, faculty, and the dean’s office through regular public forums and dialogue sessions 
            </li>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2023 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">(Public Relations & Liason Officer Coordinator</h3>
            <h4 className="vertical-timeline-element-subtitle">Andalas Lawyers Club</h4>
            <li>
              Oversaw event promotion and branding initiatives
            </li>
            <li>
              Coordinated directly with invited guests, including local officials, political figures, and analysts
            </li>
            <li>
              Led communication and promotional efforts between the committee and external partners
            </li>
            <li>
              Assisted and accompanied distinguished guests (e.g., Rocky Gerung) during the event
            </li>
            <li>
              Ensured effective dissemination of event information across the university student body
            </li>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;