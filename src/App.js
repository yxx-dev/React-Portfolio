import React, {useState} from 'react';
import Header from './components/Header';
// import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Project from './components/Project';
import Footer from './components/Footer';

export default function App() {

  const [currentTab, setCurrentTab] = useState('about-me');


  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      {/* <Banner /> */}
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  ) 
  
};