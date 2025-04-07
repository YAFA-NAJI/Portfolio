import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <button 
        className='nav-mobile-toggle' 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <img src={isMenuOpen ? menu_close : menu_open} alt="" />
      </button>

      <div className={`nav-backdrop ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu} />

      <ul 
        ref={menuRef} 
        className={`nav-menu ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {menuItems.map((item) => (
          <li key={item.id}>
            <AnchorLink 
              href={`#${item.id}`} 
              className="nav-link"
              offset={() => 100}
              onClick={closeMenu}
            >
              {item.label}
              <img src={underline} alt="" className="nav-underline" />
            </AnchorLink>
          </li>
        ))}
      </ul>

      <button className='nav-connect'>
        <AnchorLink href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>
          Connect with me
        </AnchorLink>
      </button>
    </nav>
  );
};

export default Navbar;