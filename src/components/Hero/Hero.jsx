import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleResumeClick = () => {
    // Open the PDF file in a new tab
    window.open('https://drive.google.com/file/d/1V_aMw329sP7IYGMul56FEEE_I0DA4tlG/view?usp=sharing', '_blank');
  };

  return (
    <section id='about' className='hero'>
      <div className="hero-content">
        <h1>
          <span className="hero-title-gradient">I'm Yafa Naji,</span> 
          <span className="hero-title"> Software Developer</span>
        </h1>
        <p className="hero-description">
          Front-End Developer with strong communication, teamwork, problem-solving, 
          adaptability, and time management skills. Passionate about Full-Stack development.
        </p>
        <div className="hero-actions">
          <AnchorLink 
            className='hero-button hero-button-primary' 
            offset={50} 
            href='#contact'
            aria-label="Connect with me"
          >
            Connect with me
          </AnchorLink>
          <button 
            className='hero-button hero-button-secondary'
            onClick={handleResumeClick}
            aria-label="View my resume"
          >
            My resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
