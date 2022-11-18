import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

export default function Container({currentTab}) {

//about-me, portfolio, contact, resume 
switch (currentTab) {
    case 'portfolio': 
        return (<Portfolio />);
    case 'contact': 
        return (<Contact />);
    case 'resume': 
        return (<Resume />);
    default:
        return (<AboutMe />);
}
};