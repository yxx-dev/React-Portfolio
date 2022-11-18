import React from 'react';
import resume from './images/Resume Yilun Xu.pdf'

export default function Resume() {

    
    return (
        <section id="resume" className="topics">
            <h1 className="left-title">Resume</h1>
            <article className="right-content">
              my resume text
              <a href={resume} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>

            </article>
        </section>
    );
};