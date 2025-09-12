// src/components/Project.tsx

import React, { useState } from "react";
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import '../assets/styles/Project.scss';

// Impor komponen dan tipe data modal yang baru dibuat
import ProjectModal, { ProjectData } from './ProjectModal';

// 1. Definisikan data proyek dalam sebuah array objek
const projectListData: ProjectData[] = [
    {
    id: 1,
    title: 'Sleep Monitoring System',
    thumbnail: project5,
    shortDescription: 'Built a student sleep detection system using YOLO on Jetson Nano, with real-time monitoring through a Telegram bot and an admin website.',
    detailedDescription: `
      <h3>Overview</h3>
      <p>A smart classroom monitoring system designed to detect students falling asleep during lectures using pose estimation and object detection models deployed on an edge device (NVIDIA Jetson Nano). The system captures live video through a webcam, processes it in real time, and sends instant notifications to lecturers and students once drowsiness is detected. All detection data is stored and visualized on a web-based analytics dashboard for further insights and reporting.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Real-time detection of student sleep behavior through computer vision</li>
        <li>Instant notifications delivered to lecturers and students via Telegram</li>
        <li>Analytics dashboard for data visualization, history tracking, and reporting</li>
        <li>Edge AI deployment for low-latency and offline-capable inference</li>
      </ul>
      <h3>Tools & Technologies</h3>
      <ul>
        <li>NVIDIA Jetson Nano – primary edge AI computing device</li>
        <li>Webcam – real-time input capture unit</li>
        <li>YOLO (You Only Look Once) – object detection model for identifying students</li>
        <li>TensorRT – model optimization and accelerated inference</li>
        <li>OpenCV – core computer vision library for image and video processing</li>
        <li>Firebase – real-time database for detection logs and system integration</li>
        <li>React.js – front-end framework for analytics dashboard</li>
        <li>Telegram Bot/Channel – real-time notification output</li>
        <li>Python – main programming language for system development</li>
        <li>Linux – operating system for edge deployment</li>
      </ul>
      <h3>Impact</h3>
      <p>This project demonstrates the integration of Edge AI, computer vision, and real-time communication systems to solve real-world problems in education. By combining optimized deep learning models, scalable cloud services, and intuitive data visualization, the system provides lecturers with actionable insights while fostering a more interactive and attentive learning environment.</p>
    `,
    images: [project5], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/sleep-monitoring'
  },
  {
    id: 2,
    title: 'Spotify Clone App',
    thumbnail: project6,
    shortDescription: 'Built a student sleep detection system using YOLO on Jetson Nano, with real-time monitoring through a Telegram bot and an admin website.',
    detailedDescription: 'Sistem ini menggunakan algoritma deteksi objek YOLOv5 yang berjalan di Jetson Nano untuk mendeteksi siswa yang tertidur di kelas. Ketika terdeteksi, sistem secara otomatis mengirimkan notifikasi ke bot Telegram dan mencatat kejadian tersebut di website admin untuk pemantauan lebih lanjut.',
    images: [project6], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/sleep-monitoring'
  },
  {
    id: 3,
    title: 'HOPTIMA',
    thumbnail: project4,
    shortDescription: 'Developed a mobile application to predict land and property prices using content-based filtering.',
    detailedDescription: 'HOPTIMA menggunakan model machine learning dengan content-based filtering untuk memberikan estimasi harga properti yang akurat. Model dan API di-deploy di Google Cloud Platform (GCP) untuk skalabilitas. Aplikasi mobile memberikan antarmuka yang user-friendly bagi pengguna untuk mendapatkan prediksi.',
    images: [project4], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/hoptima'
  },
  {
    id: 4,
    title: 'Karamba Warning App (pH & DO)',
    thumbnail: project2,
    shortDescription: 'Created a Flutter-based monitoring app for pH and DO levels in a fish pond, integrated with IoT sensors and Firebase for real-time data tracking.',
    detailedDescription: 'Aplikasi ini terhubung langsung dengan sensor pH dan Dissolved Oxygen (DO) yang ditempatkan di keramba ikan. Data dikirim secara real-time ke Firebase Firestore. Aplikasi Flutter kemudian menampilkan data ini dalam bentuk grafik dan memberikan notifikasi push jika level berada di luar ambang batas aman.',
    images: [project2], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/karamba-ph-do'
  },
  {
    id: 5,
    title: 'Wave Monitoring App',
    thumbnail: project3,
    shortDescription: 'Developed a real-time Flutter application integrated with IoT sensors for monitoring ocean current and wave conditions.',
    detailedDescription: 'Aplikasi ini membantu nelayan dengan memberikan data real-time tentang kondisi arus dan gelombang laut. Data dari sensor IoT dianalisis dan divisualisasikan untuk membantu pengambilan keputusan, meningkatkan keselamatan dan efisiensi operasional nelayan.',
    images: [project3], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/karamba-ocean'
  },
  {
    id: 6,
    title: 'Food Delivery App',
    thumbnail: project1,
    shortDescription: 'Built a Food Delivery App UI using Flutter with dynamic data sourced from an API.',
    detailedDescription: 'Ini adalah deskripsi lebih detail tentang Food Delivery App. Aplikasi ini dirancang dengan arsitektur clean-code untuk memastikan skalabilitas dan kemudahan maintenance. Menggunakan state management BLoC untuk menangani data yang kompleks dan asynchronous.',
    images: [project1, project2, project3], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/food-delivery-app'
  },  
];

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
        <h3>Click item to see details</h3>
        <div className="projects-grid">
          {/* Loop melalui data proyek dan render setiap item */}
          {projectListData.map((project) => (
            <div 
              key={project.id} 
              className="project" 
              onClick={() => handleProjectClick(project)}
            >
              <img src={project.thumbnail} className="zoom" alt="thumbnail" width="100%" />
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