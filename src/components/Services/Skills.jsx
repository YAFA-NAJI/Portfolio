import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Skills = () => {
  const technicalSkills = [
    'HTML', 'CSS/SCSS', 'JavaScript', 'React', 
    'Python', 'Flask', 'C/C++', 'Bootstrap',
    'Figma', 'Machine Learning', 'AI'
  ];

  const softSkills = [
    'Effective Communication', 'Adaptability',
    'Problem Solving', 'Self-Learning',
    'Self-Motivation', 'Teamwork', 'Time Management'
  ];

  return (
    <div id="skills" className='skills'>
      <div className="skills-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt='decorative pattern'/>
      </div>
      
      <div className="skills-container">
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="tech-skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="tech-skill-item">
                <div className="skill-icon">⚙️</div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Soft Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <div className="skill-icon">🌟</div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;