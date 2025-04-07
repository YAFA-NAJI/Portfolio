import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Library for smooth scrolling between sections
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  // State to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference to the menu element (optional, useful for future logic if needed)
  const menuRef = useRef();

  // Navigation menu items with section IDs and labels
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  // Toggle the mobile menu open or closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu (used when clicking a menu item or the backdrop)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      {/* Mobile menu toggle button */}
      <button 
        className='nav-mobile-toggle' 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <img src={isMenuOpen ? menu_close : menu_open} alt="" />
      </button>

      {/* Backdrop overlay that appears when the menu is open (clicking it closes the menu) */}
      <div className={`nav-backdrop ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu} />

      {/* Main navigation menu */}
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
              offset={() => 100} // Scroll offset for smooth scroll
              onClick={closeMenu} // Close the menu when a link is clicked
            >
              {item.label}
              <img src={underline} alt="" className="nav-underline" />
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Call-to-action button for users to connect with you */}
      <button className='nav-connect'>
        <AnchorLink href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>
          Connect with me
        </AnchorLink>
      </button>
    </nav>
  );
};

export default Navbar;
