import React, {useState} from 'react';
import resume from './images/Resume Yilun Xu.pdf'

export default function Navigation() {
    const [currentTab, setCurrentTab] = useState('about-me');
    const style = {
        active: {
            color: 'rgb(15, 211, 15)',
            textDecoration: 'inherit'
        },
        inactive: {
            color: 'inherit',
            textDecoration: 'inherit'
        }
    }
    function isActive (activeTab, myTab) {
        if (activeTab === myTab) {
            return true;
        } return false;
    }

    return (
        <nav>
            <ul>
                <li className="nav"><a href="#about-me" style={isActive(currentTab, 'about-me') ? style.active : style.inactive} onClick={()=>setCurrentTab('about-me')}>About Me</a></li>
                <li className="nav"><a href="#portfolio" style={isActive(currentTab, 'portfolio') ? style.active : style.inactive} onClick={()=>setCurrentTab('portfolio')}>Portfolio</a></li>
                <li className="nav"><a href="#contact" style={isActive(currentTab, 'contact') ? style.active : style.inactive} onClick={()=>setCurrentTab('contact')}>Contact</a></li>
                <li className="nav"><a href={resume} style={isActive(currentTab, 'resume') ? style.active : style.inactive} onClick={()=>setCurrentTab('resume')}>Resume</a></li>
            </ul>
        </nav>
    );
};