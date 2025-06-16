import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/yunenBase" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/ikhwanul-hakim-b41246222" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://instagram.com/ikhwannnn___" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
      <p>Ikhwanul Hakim | 2025</p>
    </footer>
  );
}

export default Footer;