import React from 'react';
import Navigation from './Navigation';

export default function Header({currentTab, setCurrentTab}) {


    return (
        <header>
            <img src={`${process.env.PUBLIC_URL}/assets/images/headshot.jpg`} className="headshot" alt="A professional headshot of Yilun Xu"/> 
            <h1 className="title">Yilun Xu | REACT Portfolio</h1>
            <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </header>
    );
};