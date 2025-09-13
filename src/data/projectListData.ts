import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import { ProjectData } from '../components/ProjectModal';

const projectListData: ProjectData[] = [
    {
    id: 1,
    title: 'Sleep Monitoring System',
    thumbnail: project5,
    shortDescription: 'An AI-powered Student Sleep Detection System built on NVIDIA Jetson Nano, capable of detecting drowsy students in real time using YOLO and pose estimation. The system sends instant Telegram notifications to lecturers, while detection data is stored in Firebase and visualized through a React.js analytics dashboard for actionable insights.',
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
    githubLink: 'https://github.com/yunenBase/sleep-monitoring'
  },
  {
    id: 2,
    title: 'Spotify Clone App',
    thumbnail: project6,
    shortDescription: 'A Spotify Clone App built with Flutter & Dart, featuring real Spotify login, music playback, and playlist management through the Spotify Web API & SDK. The project emphasizes MVCC architecture for clean and maintainable code, Provider state management for reactive UI, and pixel-perfect design faithfully implemented from Figma for a production-ready user experience.',
    detailedDescription: `
      <h3>Overview</h3>
      <p>A high-fidelity Spotify clone built with Flutter that replicates the core functionalities of the official Spotify app. The project leverages the Spotify Web API and Spotify SDK for real music streaming and playlist management, while ensuring pixel-perfect UI implementation from Figma designs. The development workflow adopted the Gitflow strategy, enabling seamless collaboration and efficient version control in a team-based environment.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Spotify Account Integration – secure login with official Spotify credentials</li>
        <li>Music Streaming – play, pause, skip, and control tracks directly in the app</li>
        <li>Playlist Management – add and remove songs, and manage personal playlists</li>
        <li>Playlist Insights – view details such as track lists, cover images, and metadata</li>
        <li>Pixel-perfect UI – flawless replication of Figma design with smooth user experience</li>
      </ul>
      <h3>Tools & Technologies</h3>
      <ul>
        <li>Flutter & Dart – cross-platform mobile development</li>
        <li>Spotify Web API – access to music data, playlists, and user libraries</li>
        <li>Spotify SDK – native playback and music control integration</li>
        <li>Provider (State Management) – reactive UI and scalable architecture</li>
        <li>MVCC (Model-View-Controller with Components) – structured and maintainable project architecture</li>
        <li>Figma Design Implementation – pixel-perfect UI for a production-ready look</li>
      </ul>
      <h3>Impact</h3>
      <p>This project showcases strong capabilities in cross-platform mobile development, third-party API integration, and scalable architecture design. By replicating a widely used application like Spotify, it highlights practical skills in building real-world, production-quality mobile applications with seamless user experience and clean code practices.</p>
    `,
    images: [project6], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/yunenBase/team-spotify'
  },
  {
    id: 3,
    title: 'HOPTIMA',
    thumbnail: project4,
    shortDescription: 'An AI-powered property search chatbot that uses NLP (RAG) to deliver precise, personalized recommendations. Built on GCP (Cloud Run, Firestore, Cloud Storage) with a Flask API, it simplifies property discovery with real-time insights and localized focus on Yogyakarta.',
    detailedDescription: `
      <h3>Overview</h3>
      <p>HOPTIMA is an AI-powered interactive chatbot designed to transform the property search experience. Instead of sifting through endless listings, users can simply chat with the system using natural language queries (e.g., “2-bedroom house with parking under 1,5M near Yogyakarta”). The chatbot instantly provides highly targeted recommendations, saving time and effort while delivering a seamless and engaging property discovery journey.</p>
      <h3>Key Features</h3>
      <ul>
          <li>Interactive chatbot with natural language input for property search</li>
          <li>Personalized recommendations based on user preferences and location context</li>
          <li>Real-time suggestions & notifications for newly available properties</li>
          <li>Localized focus on the Yogyakarta area for more relevant results</li>
      </ul>
      <h3>Tools & Technologies</h3>
      <ul>
          <li>Google Cloud Platform (GCP)</li>
          <li>Cloud Storage – storing ML models and application assets</li>
          <li>Cloud Run – serverless deployment for scalable API services</li>
          <li>NLP with Retrieval-Augmented Generation (RAG) – for accurate, context-aware recommendations</li>
          <li>Flask – lightweight framework to build RESTful APIs</li>
          <li>Firestore – real-time database for storing and managing recommendation results</li>
      </ul>
      <h3>Impact</h3>
      <p>HOPTIMA delivers a smarter and more human-centric property search experience by combining AI-driven personalization, NLP-based interaction, and real-time property insights. Unlike generic listing platforms, HOPTIMA stands out with its chat-based interface, precise recommendations, and localized focus on Yogyakarta, making property discovery faster, simpler, and more engaging.</p>
    `,
    images: [project4], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/hoptima'
  },
  {
    id: 4,
    title: 'Karamba Warning App (pH & DO)',
    thumbnail: project2,
    shortDescription: 'An IoT-powered aquaculture monitoring app that tracks pH and dissolved oxygen in real time, sending instant alarms with custom ringtones, vibrations, and push notifications. Equipped with historical analysis and visualization, it empowers fish farmers to prevent fish mortality and improve long-term productivity.',
    detailedDescription: `
      <h3>Overview</h3>
      <p>Karamba Warning App is a real-time aquaculture monitoring solution built to protect fish cages (karamba) from unsafe water conditions. Using custom IoT devices with pH and dissolved oxygen (DO) sensors, the system continuously monitors water quality and sends instant alerts with custom ringtones and vibrations when values cross safe thresholds. Beyond real-time monitoring, it also provides historical analysis and data visualization, empowering fish farmers to prevent mass fish deaths and improve long-term productivity.</p>
      <h3>Key Features</h3>
      <ul>
          <li>Real-time monitoring of pH and DO from custom IoT sensors</li>
          <li>Local in-app alarms with custom ringtones and vibrations for critical alerts</li>
          <li>Push notifications to keep users updated anytime, anywhere</li>
          <li>Historical analysis & visualization of water quality trends</li>
          <li>Farmer-focused design tailored for aquaculture owners to reduce risk of fish mortality</li>
      </ul>
      <h3>Tools & Technologies</h3>
      <ul>
          <li>Flutter & Dart – mobile app development</li>
          <li>Firebase – real-time database, push notifications, and backend services</li>
          <li>Custom IoT Devices (ESP32 + sensors) – water quality monitoring hardware</li>
          <li>Local & push notifications – multi-layer alerting system for maximum reliability</li>
      </ul>
      <h3>Impact</h3>
      <p>This project showcases the integration of custom IoT hardware with mobile and cloud technologies to solve real-world aquaculture challenges. By providing instant alerts, historical insights, and farmer-friendly features, the app helps fish farmers act proactively, minimize losses, and achieve more sustainable aquaculture operations.</p>
    `,
    images: [project2], 
    githubLink: 'https://github.com/your-username/karamba-ph-do'
  },
  {
    id: 5,
    title: 'Wave X',
    thumbnail: project3,
    shortDescription: 'An IoT-based ocean monitoring app that tracks currents and wind speed in real time, sending custom alarms and push notifications when conditions turn unsafe. With historical data and visualization, Wave X helps fishermen stay safe and make better decisions at sea.',
    detailedDescription: `
      <h3>Overview</h3>
      <p>Wave X is a real-time ocean monitoring system designed to keep fishermen safe at sea. Using custom IoT devices equipped with sensors, the app continuously tracks ocean currents and wind speed, then issues instant alarms with custom ringtones, vibrations, and push notifications whenever conditions exceed safety thresholds. Beyond real-time alerts, Wave X provides historical analysis and data visualization, enabling fishermen to better plan their activities and avoid dangerous situations.</p>
      <h3>Key Features</h3>
      <ul>
          <li>Real-time monitoring of ocean currents and wind speed</li>
          <li>Local in-app alarms with custom ringtones and vibrations for critical safety alerts</li>
          <li>Push notifications to keep users updated anytime, anywhere</li>
          <li>Historical analysis & visualization of ocean condition trends</li>
          <li>Fishermen-focused design tailored to support safe and informed decision-making</li>
      </ul>
      <h3>Tools & Technologies</h3>
      <ul>
          <li>Flutter & Dart – mobile app development</li>
          <li>Firebase – real-time database, push notifications, and backend integration</li>
          <li>Custom IoT Devices – for current and wind speed measurement</li>
          <li>Local & push notifications – multi-layered alerting system for maximum reliability</li>
      </ul>
      <h3>Impact</h3>
      <p>Wave X combines IoT, cloud services, and mobile technology to deliver actionable insights for maritime safety. By providing real-time alerts and historical trends, it helps fishermen anticipate ocean conditions, minimize risks, and ensure safer fishing operations.</p>
    `,
    images: [project3], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/karamba-ocean'
  },
  {
    id: 6,
    title: 'Food Delivery App',
    thumbnail: project1,
    shortDescription: 'A Flutter-based food delivery app UI that simulates an online ordering experience with API-driven menu data and a clean, intuitive interface.',
    detailedDescription: `
      <h3>Overview</h3>
      <p>A simple yet complete online food delivery app UI built with Flutter, showcasing the core flow of browsing and ordering food. The app consumes data from a mock API to simulate real-world functionality and provide a smooth, interactive user experience.</p>
      <h3>Key Features</h3>
      <ul>
          <li>Browse food menus with images, descriptions, and prices</li>
          <li>View detailed item pages for each menu</li>
          <li>Basic cart functionality</li>
          <li>Clean and intuitive UI for easy navigation</li>
      </ul>
      <h3>Tools & Technologies</h3>
      <ul>
          <li>Flutter & Dart – mobile app development</li>
          <li>REST API (mock data) – as backend data source</li>
      </ul>
    `,
    images: [project1], // Ganti dengan gambar-gambar relevan
    githubLink: 'https://github.com/your-username/food-delivery-app'
  },  
];

export default projectListData;