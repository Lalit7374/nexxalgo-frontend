import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
              <img src="/assets/logo.jpeg" alt="Nexx Algo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 0 0 1px rgba(74, 158, 255, 0.3)' }} />
              <div>
                <h3 style={{ fontSize: '1.6rem', margin: 0 }}>
                  NEXX<span style={{ background: 'linear-gradient(120deg, var(--brand-blue-light), var(--brand-purple-light))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ALGO</span>
                </h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brand-blue-light)', fontWeight: 500 }}>
                  IT Solutions
                </span>
              </div>
            </div>
            <p style={{ fontStyle: 'italic', color: 'var(--white-60)', marginBottom: '0.6rem', fontSize: '0.88rem' }}>
              Smart Algorithms. Smarter Future.
            </p>
            <p>
              A boutique software studio building production-grade web,
              mobile, AI, and trading systems for founders worldwide.
            </p>
          </div>

          <div className="footer-col">
            <h5>Studio</h5>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Career</h5>
            <ul>
              <li><Link to="/career">All openings</Link></li>
              <li><Link to="/career">Internships</Link></li>
              <li><Link to="/career">Full-time roles</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li>
                <a href="mailto:alphadeveloper.tech@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} /> alphadeveloper.tech@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/shivraj-chourasia-917310344" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Twitter size={14} /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nexx Algo · Built in India</span>
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
