import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Avatar2 from '../assets/images/Avatar2.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
                  <img src={Avatar2} alt="Avatar" />


        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/LucaGruenberger" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/luca-gr&uuml;nberger-6b9632322/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
                  <h1>Luca Gr&uuml;nberger</h1>
          <p>Game Programmer | Game Designer</p>

          <div className="mobile_social_icons">
                      <a href="https://github.com/LucaGruenberger" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/luca-gr&uuml;nberger-6b9632322/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;