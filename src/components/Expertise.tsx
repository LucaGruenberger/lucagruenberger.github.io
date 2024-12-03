import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Unity",
    "C#",
    "Github",
    "Blender",
    "Visual Studio",
];

//const labelsSecond = [
//    "Program 1",
//];

//const labelsThird = [
//    "Program 1",

//];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Unity Development</h3>
                        <p>Throughout my bachelor's program in game design I developed different games for PC aswell as mobile platforms. I have practical knowledge working with Unity in 3D and 2D and the programming language C#.
                             I have further knowledge of modeling and animation in Blender.</p>




                    <div className="flex-chips">
                        <span className="chip-title">Programs:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/*<div className="skill">*/}
                {/*    <FontAwesomeIcon icon={faDocker} size="3x"/>*/}
                {/*    <h3>Überschrift</h3>*/}
                {/*    <p>Text</p>*/}
                {/*    <div className="flex-chips">*/}
                {/*        <span className="chip-title">Tech stack:</span>*/}
                {/*        {labelsSecond.map((label, index) => (*/}
                {/*            <Chip key={index} className='chip' label={label} />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    </div>
    );
}

export default Expertise;