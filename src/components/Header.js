import React from 'react';
import Navigation from './Navigation';

export default function Header() {


    return (
        <header>
            <img src="/assets/images/headshot.jpg" className="headshot" alt="A professional headshot of Yilun Xu"/> 
            <h1 className="title">Yilun Xu | REACT Portfolio</h1>
            <Navigation />
        </header>
    );
};