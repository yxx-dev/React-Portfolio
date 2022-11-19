import React from 'react';
import Project from './Project';

const projectDetail = [
    {
        id: 'proj1',
        name: 'Project1',
        deployment: '#',
        repo: '#'
    },
    {
        id: 'proj2',
        name: 'Project2',
        deployment: '#',
        repo: '#'
    },
    {
        id: 'proj3',
        name: 'Project3',
        deployment: '#',
        repo: '#'
    },
    // {
    //     id: 'proj4',
    //     name: 'Fun Break Fortifier',
    //     link: 'https://yxx-dev.github.io/Fun-break-fortifier-official/'
    // },
    // {
    //     id: 'proj5',
    //     name: 'CMEV Survey',
    //     link: 'https://blooming-garden-02531.herokuapp.com/login'
    // },
]


export default function Portfolio() {

    
    return (
        <section id="portfolio" className="topics">
            <h1 className="left-title">Portfolio</h1>
            <article className="right-content">
                <Project id={projectDetail[0].id} name={projectDetail[0].name} deployment={projectDetail[0].deployment} repo={projectDetail[0].repo}/>
                <Project id={projectDetail[1].id} name={projectDetail[1].name} deployment={projectDetail[1].deployment} repo={projectDetail[1].repo}/>
                <Project id={projectDetail[2].id} name={projectDetail[2].name} deployment={projectDetail[2].deployment} repo={projectDetail[2].repo}/>
                {/* <Project id={projectDetail[3].id} name={projectDetail[3].name} link={projectDetail[3].link}/>
                <Project id={projectDetail[4].id} name={projectDetail[4].name} link={projectDetail[4].link}/> */}
            </article>
        </section>
        

    );
};