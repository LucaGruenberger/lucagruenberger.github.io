import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
              <a href="https://github.com/LucaGruenberger" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/luca-gr&uuml;nberger-6b9632322/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
          <p>A portfolio designed & built by Luca Grünberger</p> {/*<a href="https://www.linkedin.com/in/luca-gr&uuml;nberger-6b9632322/" target="_blank" rel="noreferrer">Luca Grünberger</a> with 💜</p>*/}
    </footer>
  );
}

export default Footer;