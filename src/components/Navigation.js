import React from 'react';

export default function Navigation({currentTab, setCurrentTab}) {
    // const [currentTab, setCurrentTab] = useState('about-me');
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
            return style.active;
        } return style.inactive;
    }

    return (
        <nav>
            <ul>
                <li className="nav"><a href="#about-me" style={isActive(currentTab, 'about-me')} onClick={()=>setCurrentTab('about-me')}>About Me</a></li>
                <li className="nav"><a href="#portfolio" style={isActive(currentTab, 'portfolio')} onClick={()=>setCurrentTab('portfolio')}>Portfolio</a></li>
                <li className="nav"><a href="#contact" style={isActive(currentTab, 'contact')} onClick={()=>setCurrentTab('contact')}>Contact</a></li>
                <li className="nav"><a href="#resume" style={isActive(currentTab, 'resume')} onClick={()=>setCurrentTab('resume')}>Resume</a></li>
            </ul>
        </nav>
    );
};