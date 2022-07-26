import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/donuts-1.mp4' autoPlay loop muted />
      <h1>Donuts & Code awaits!</h1>
      <p>Please take a look around and tell me what you think!</p>
    </div>
  );
}

export default HeroSection;
