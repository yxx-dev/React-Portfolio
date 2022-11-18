import React from 'react';
import resume from './images/Resume Yilun Xu.pdf'

export default function Navigation() {


    return (
        <nav>
            <ul>
                <li className="nav"><a href="#about-me">About Me</a></li>
                <li className="nav"><a href="#work">Portfolio</a></li>
                <li className="nav"><a href="#contact-me">Contact Me</a></li>
                <li className="nav"><a href={resume}>Resume</a></li>
            </ul>
        </nav>
    );
};