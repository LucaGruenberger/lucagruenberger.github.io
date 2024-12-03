import React from "react";
/*import mock01 from '../assets/images/mock01.png';*/


import ReactDOM from 'react-dom';
import Chip from '@mui/material/Chip';


import ContSpin from '../assets/videos/ContSpin.gif';

import Video1 from '../assets/videos/Video1.mp4';
import Video2 from '../assets/videos/Video2.mp4';
import Video3 from '../assets/videos/Video3.mp4';
import Video4 from '../assets/videos/Video4.mp4';


import '../assets/styles/Project.scss';


const labelsProj1 = [
    "Unity",
    "C#",
];

const labelsProj2 = [
    "Unity",
    "C#",
];

const labelsProj3 = [
    "Unity",
    "C#",
    "Blender",
];

const labelsFirst = [
    "Wave Spawner",
    "Enemy Classes",
    "Pathfinding",
    "Enemy Behaviour",
    "Upgrade System",
];

const labelsSecond = [
    "Fruit Classes",
    "Fruit Spawner",
    "Fruit Collector",
    "Fruit Merging",
    "Score Multiplier",
    "Sounds",

];

const labelsThird = [
    "Rendered 3D Assets",
    "Bottle Spawner",
    "Bottle Controller",
    "Contailer Controller",
    "UI",

];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">

                    {/*<span className="chip-title"> <h2>Fighting For Fortune {labelsProj1.map((label, index) => (<Chip key={index} className='chip' label={label} />))} </h2> </span>*/}
                    <video loop autoPlay className="zoom" width="750" height="420" muted>

                           <source src={Video1} type="video/mp4" />

                    </video>
{/*                    <a href="https...Link" target="_blank" rel="noreferrer">  <h2> Fighting For Fortune  </h2> </a>*/}

                    <h2>Ultimate Sugar Rush</h2>
                    {/*<span className="chip-title"> <h2>Fighting For Fortune {labelsProj1.map((label, index) => (<Chip key={index} className='chip' label={label} />))} </h2> </span>*/}
                    <p>Developed 2D Hack and Slash as part of the examination of the Semester using Unity and C#.</p>
                    <p>In this group project I took the role of the game programmer. I implemented the game mechanics for the core game loop, in which a enemy wave with three different enemy classes gets instantiated and as soon as the current enemy wave is defeated, the player can upgrade their attributes before the next wave begins.       </p>


                    <div className="flex-chips">
                        <span className="chip-title">Implemented Mechanics:</span>
                    {labelsFirst.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>
                <div className="project">

                    {/*<span className="chip-title"> <h2>Ultimate Sugar Rush {labelsProj2.map((label, index) => (<Chip key={index} className='chip' label={label} />))} </h2> </span>*/}

                    {/*                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>*/}

                    <video loop autoPlay className="zoom" width="750" height="420" muted >

                        <source src={Video2} type="video/mp4" />

                    </video>

                    {/*<a href="https...Link" target="_blank" rel="noreferrer"><h2> Ultimate Sugar Rush</h2></a>*/}

                    <h2>Ultimate Sugar Rush</h2>
                    {/*<span className="chip-title"> <h2>Ultimate Sugar Rush {labelsProj2.map((label, index) => (<Chip key={index} className='chip' label={label} />))} </h2> </span>*/}

                    <p>Developed a mobile 2D Casual Game as part of the examination of the Semester using Unity and C#.</p>
                    <p>In this group project I also took the role as the game programmer. I implemented the game mechanics for the core game loop, in which fruits get instantiated and dropped from the top of the screen and by tapping on a fruit it gets collected. Next the player has to find one of the same fruits among the falling fruits and tap on them to combine the collected fruit with another one to increase its size and score value. Further fruits can be combined into the still falling one in the same manner to increase the score value even further until its reaching the bottom of the screen. </p>

                    <div className="flex-chips">
                        <span className="chip-title">Implemented Mechanics: </span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>


            </div>
            <div className="project">
                    {/*<a href=LINK" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>*/}



                    {/*<span className="chip-title"> <h2>Bachelor Thesis {labelsProj3.map((label, index) => (<Chip key={index} className='chip' label={label} />))} </h2> </span>*/}
                    <video loop autoPlay className="zoom" width="750" height="420" muted >

                        <source src={Video3} type="video/mp4" />

                    </video>

                    {/*<a href="https...Link" target="_blank" rel="noreferrer"><h2>Bachelor Thesis</h2></a>*/}

                    <h2>Bachelor Thesis</h2>
                    {/*<span className="chip-title"> <h2>Bachelor Thesis {labelsProj3.map((label, index) => (<Chip key={index} className='chip' label={label} />))} </h2> </span>*/}
                    <p>Developed and designed a mobile 2D Serious Game to 'encourage the recycling motivation of adults' by conveying a basic understanding of glas recycling, using Unity, C# and Blender.</p>
                    <p>I developed this Game as the goal of my Bachelor Thesis. In this game different glas packaging is moving towards a circle, which is divided into the three container for used glass. The circle has to be moved to sort the glass colors into the correct container. Furthermore other items that cannot be recycled need to be sorted out by tapping on them.</p>

                    <div className="flex-chips">
                        <span className="chip-title">Developed:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>

                    
                    {/*<div className='d-flex align-items-center mt-5 justify-content-center'> */}
                    {/*    <a> Download my Bachelor Thesis here:</a>*/}
                    {/*    <button style={{*/}
                    {/*        backgroundColor: '#0f76e0', borderRadius: 4,*/}
                    {/*        margin: 5, height: 30, width: 110,*/}
                    {/*    }}>  <a className='btn btn success' href='Bachelor Thesis_Gr&uuml;nberger.pdf' download="Bachelor Thesis_Gr&uuml;nberger.pdf">Download PDF</a> </button>*/}
                    {/*</div>*/}


                    {/*<p>Text... </p>*/}

            </div>

                                                {/*More Projects...*/}
            {/*<div className="project">*/}
            {/*    <a href="Link" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>*/}
            {/*    <a href="Link" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>*/}
            {/*    <p>More Text</p>*/}
                {/*</div>*/}
           
        </div>
    </div>
    );
}

export default Project;