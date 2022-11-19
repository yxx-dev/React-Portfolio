import React from 'react';
import resume from './assets/Resume Yilun Xu.pdf'

export default function Resume() {

    
    return (
        <section id="resume" className="topics">
            <h1 className="left-title">Resume</h1>
            <article className="right-content">
                <ul>
                    <li>Web-dev stack: MERN</li>
                    <li>Key skills: leadership, PM, engineering</li>
                    <li>Experiences: data analytics (10yrs), management (5yrs), web-dev (1yr)</li>
                </ul>
                <a href={resume} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>

            </article>
        </section>
    );
};