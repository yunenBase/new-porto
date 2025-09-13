// src/components/Project.tsx

import React, { useState } from "react";
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import '../assets/styles/Project.scss';
import projectListData from '../data/projectListData';

// Impor komponen dan tipe data modal yang baru dibuat
import ProjectModal, { ProjectData } from './ProjectModal';


function Project() {
  // 2. State untuk menyimpan data proyek yang dipilih untuk ditampilkan di modal
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // 3. Fungsi untuk membuka modal
  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
  };

  // 3. Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          {/* Loop melalui data proyek dan render setiap item */}
          {projectListData.map((project) => (
            <div 
              key={project.id} 
              className="project" 
              onClick={() => handleProjectClick(project)}
            >
              <div className="zoom">
                <img src={project.thumbnail} alt="thumbnail" width="100%" />
                <span className="view-details">view details</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Render modal secara kondisional. Hanya tampil jika selectedProject tidak null */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Project;