// src/components/ProjectModal.tsx

import React, { useState } from 'react';
import '../assets/styles/ProjectModal.scss';

// Definisikan tipe data untuk sebuah project agar lebih rapi dengan TypeScript
export interface ProjectData {
  id: number;
  title: string;
  thumbnail: string;
  shortDescription: string;
  detailedDescription: string;
  images: string[];
  githubLink: string;
}

// Definisikan tipe untuk props komponen modal
interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [closing, setClosing] = useState(false);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300); // 300ms sesuai durasi animasi
  };

  return (
    <div
      className={`modal-overlay${closing ? ' fade-out' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content${closing ? ' slide-out' : ''}`}
        onClick={handleContentClick}
      >
        <button className="close-button" onClick={handleClose}>&times;</button>
        <h2>{project.title}</h2>
        <div className="modal-images">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} />
          ))}
        </div>
        <div 
          className="detailed-description"
          dangerouslySetInnerHTML={{ __html: project.detailedDescription }} 
        />
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;