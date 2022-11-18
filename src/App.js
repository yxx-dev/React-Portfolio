import React, {useState} from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState('about-me'); //about-me, portfolio, contact, resume 
  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Container currentTab={currentTab} />
      <Footer />
    </div>
  )
};