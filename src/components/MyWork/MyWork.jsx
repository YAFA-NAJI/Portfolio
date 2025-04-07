import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          const imageStyle = {
            height: work.customHeight ? `${work.customHeight}px` : '280px',
            width: work.customWidth ? `${work.customWidth}px` : '419px',
            objectFit: work.imageStyle === 'wide' ? 'cover' : 'contain'
          }
          
          return (
            <div key={index} className="work-item">
              <img 
                src={work.w_img} 
                alt={work.title} 
                style={imageStyle}
                className={work.imageStyle}
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
          )
        })}
      </div>
      <div className="mywork-showmore">
  <a 
    href="https://github.com/YAFA-NAJI" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '15px'}}
  >
    <p>Show More</p>
    <img src={arrow_icon} alt='' />
  </a>
</div>
    </div>
  )
}

export default MyWork