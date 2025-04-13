import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt='decoration pattern' />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div 
            key={index} 
            className={`work-item ${work.imageStyle || ''}`} 
            tabIndex="0"
          >
            <img 
              src={work.w_img} 
              alt={work.title} 
              loading="lazy"
            />
            <div className="work-overlay">
              <h3>{work.title}</h3>
              <p>{work.desc}</p>
              <a 
                href={work.github_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <a 
        href="https://github.com/YAFA-NAJI" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mywork-showmore"
      >
        <span>Show More</span>
        <img src={arrow_icon} alt='arrow icon' />
      </a>
    </div>
  );
};

export default MyWork;
