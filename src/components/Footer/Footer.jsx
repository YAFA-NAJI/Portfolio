import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa' // Using React Icons for social media

const Footer = () => {
  const [email, setEmail] = React.useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Add your subscription logic here
    console.log('Subscribed with:', email)
    setEmail('')
  }

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <form onSubmit={handleSubscribe} className="footer-subscription">
           
          </form>
        </div>
      </div>
      <hr className='footer-divider' />
      <div className="footer-bottom">
        <p className="footer-bottom-left">©2025 Yafa Naji. All rights reserved.</p>
        <div className="footer-bottom-right">
      
          <p>Connect With Me</p>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/yafa-naji/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/YAFA-NAJI" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer