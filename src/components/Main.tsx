import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import ikhwanulHakim from '../assets/images/ikhwan.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ikhwanulHakim} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yunenBase" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/ikhwanul-hakim-b41246222" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://instagram.com/ikhwannnn___" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Ikhwanul Hakim</h1>
          <p>Tech Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yunenBase" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/ikhwanul-hakim-b41246222" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://instagram.com/ikhwannnn___" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;