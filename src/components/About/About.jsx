import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { FaGraduationCap, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt='decoration pattern'/>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h3>2020 - 2025</h3>
            <h4>Computer Engineering</h4>
            <p>Birzeit University, Ramallah</p>
            <p>Bachelor's Degree</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaMobileAlt />
          </div>
          <div className="timeline-content">
            <h3>Jul - Sep 2024</h3>
            <h4>Mobile App Developer Intern</h4>
            <p>Experts Turnkey Solutions</p>
            <ul>
              <li>Developed React Native apps</li>
              <li>Improved performance by 15%</li>
              <li>Created reusable components</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaLaptopCode />
          </div>
          <div className="timeline-content">
            <h3>Nov 2024 - Feb 2025</h3>
            <h4>Front-End Trainee</h4>
            <p>Palestine Launchpad - Udacity</p>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Responsive Web Design</li>
              <li>Modern Development Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;