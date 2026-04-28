import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img
            src="/assets/logo.jpeg"
            alt="Nexx Algo"
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-name">NEXX<span className="brand-name-accent">ALGO</span></span>
            <span className="brand-tagline">IT Solutions</span>
          </div>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end>Studio</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/career">Career</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li>
            <Link to="/contact" className="nav-cta">
              Start a project
              <span className="nav-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
