import React from 'react';
import Navigation from './Navigation';

export default function Header() {


    return (
        <header>
            <img src="/assets/images/headshot.jpg" class="headshot" alt="A professional headshot of Yilun Xu"/> 
            <h1 class="title">Yilun Xu | Professional Portfolio</h1>
            <Navigation />
        </header>
    );
};