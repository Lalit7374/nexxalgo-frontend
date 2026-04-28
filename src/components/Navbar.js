// import React, { useState, useEffect } from 'react';
// import { NavLink, Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   return (
//     <nav className="nav">
//       <div className="container nav-inner">
//         <Link to="/" className="brand">
//           <img
//             src="/assets/logo.jpeg"
//             alt="Nexx Algo"
//             className="brand-logo"
//           />
//           <div className="brand-text">
//             <span className="brand-name">NEXX<span className="brand-name-accent">ALGO</span></span>
//             <span className="brand-tagline">IT Solutions</span>
//           </div>
//         </Link>

//         <ul className={`nav-links ${open ? 'open' : ''}`}>
//           <li><NavLink to="/" end>Studio</NavLink></li>
//           <li><NavLink to="/services">Services</NavLink></li>
//           <li><NavLink to="/portfolio">Portfolio</NavLink></li>
//           <li><NavLink to="/career">Career</NavLink></li>
//           <li><NavLink to="/about">About</NavLink></li>
//           <li>
//             <Link to="/contact" className="nav-cta">
//               Start a project
//               <span className="nav-cta-arrow" aria-hidden="true">→</span>
//             </Link>
//           </li>
//         </ul>

//         <button
//           className="menu-toggle"
//           aria-label="Toggle menu"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Studio",    to: "/" },
  { label: "Services",  to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Career",    to: "/career" },
  { label: "About",     to: "/about" },
];

const Navbar = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();

  /* Close menu on route change */
  useEffect(() => { setOpen(false); }, [location.pathname]);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Shrink nav on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "10px 20px" : "16px 20px",
          background: scrolled
            ? "rgba(5, 5, 15, 0.92)"
            : "rgba(5, 5, 15, 0.75)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "padding 0.3s ease, background 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
            zIndex: 1001,
          }}
        >
          {/* Logo icon — replace with your <img> if needed */}
          
           <img
            src="/assets/logo.jpeg"
            alt="Nexx Algo"
            className="brand-logo"
          />
          
          <span
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              color: "#fff",
            }}
          >
            NEXX<span style={{ color: "#7c6af7" }}>ALGO</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav-links"
        >
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color:
                    location.pathname === to
                      ? "#7c6af7"
                      : "rgba(255,255,255,0.75)",
                  transition: "color 0.2s",
                  paddingBottom: 2,
                  borderBottom:
                    location.pathname === to
                      ? "1px solid #7c6af7"
                      : "1px solid transparent",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="desktop-nav-cta"
          style={{
            textDecoration: "none",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: "#fff",
            background: "linear-gradient(135deg, #7c6af7, #4f8ef7)",
            padding: "8px 18px",
            borderRadius: 50,
            transition: "opacity 0.2s",
          }}
        >
          Start a project
        </Link>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="hamburger-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: 6,
            display: "none",         /* shown via CSS below */
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1001,
            borderRadius: 6,
            transition: "background 0.2s",
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(5, 5, 18, 0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "80px 32px 40px",
            }}
          >
            {/* Decorative accent blob */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                right: "5%",
                width: 220,
                height: 220,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(124,106,247,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Nav links */}
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                width: "100%",
                maxWidth: 320,
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {navLinks.map(({ label, to }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                      fontSize: "clamp(1.6rem, 7vw, 2.2rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color:
                        location.pathname === to
                          ? "#7c6af7"
                          : "rgba(255,255,255,0.9)",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      transition: "color 0.2s",
                    }}
                  >
                    <span>{label}</span>
                    <span
                      style={{
                        fontSize: "1rem",
                        opacity: 0.35,
                        fontWeight: 400,
                      }}
                    >
                      0{i + 1}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* CTA inside menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{ marginTop: "2.5rem", width: "100%", maxWidth: 320 }}
            >
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#fff",
                  background: "linear-gradient(135deg, #7c6af7, #4f8ef7)",
                  padding: "14px 24px",
                  borderRadius: 50,
                  letterSpacing: "0.04em",
                }}
              >
                Start a project →
              </Link>
            </motion.div>

            {/* Footer tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              style={{
                position: "absolute",
                bottom: 32,
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Software Studio · Est. 2024
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── RESPONSIVE CSS ── */}
      <style>{`
        /* Show desktop links + CTA, hide hamburger on wide screens */
        @media (min-width: 769px) {
          .desktop-nav-links { display: flex !important; }
          .desktop-nav-cta   { display: inline-block !important; }
          .hamburger-btn     { display: none !important; }
        }

        /* Hide desktop links + CTA, show hamburger on mobile */
        @media (max-width: 768px) {
          .desktop-nav-links { display: none !important; }
          .desktop-nav-cta   { display: none !important; }
          .hamburger-btn     { display: flex !important; }
        }

        /* Hover states */
        .desktop-nav-links a:hover { color: #fff !important; }
        .desktop-nav-cta:hover     { opacity: 0.85; }
        .hamburger-btn:hover       { background: rgba(255,255,255,0.07) !important; }
      `}</style>
    </>
  );
};

export default Navbar;