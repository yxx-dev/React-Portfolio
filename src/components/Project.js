import React from 'react';

export default function Project({id, name, deployment, repo}) {


    return (
        <a class="prod" id={id} href={deployment} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${id}.jpg)`}}>
             {/* target="_blank" rel="noopener noreferrer" */}
            <h2>
                <div>{name}</div> 
                <a href={deployment}>- deployment|</a>
                <a href={repo}>repo</a>
                <br></br>
            </h2>
        </a>
    )
};