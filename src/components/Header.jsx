import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }

        .header {
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          z-index: 1001;
        }

        .logo-text {
          font-size: 28px;
          font-weight: 700;
          color: #84c225;
          margin: 0;
          letter-spacing: 1px;
        }

        .tagline {
          font-size: 14px;
          font-weight: 500;
          color: #3b3531;
          margin-top: -2px;
          letter-spacing: 0.5px;
        }

        .logo-link {
          text-decoration: none;
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
          padding: 5px;
          z-index: 1001;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: #374151;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #3b82f6;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #3b82f6;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .nav-menu {
            gap: 1.5rem;
          }

          .nav-link {
            font-size: 15px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .header {
            padding: 1rem 1.5rem;
          }

          .hamburger {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background-color: #ffffff;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 80px 2rem 2rem;
            gap: 2rem;
            box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-link {
            font-size: 18px;
            width: 100%;
            padding: 0.5rem 0;
          }

          .nav-link::after {
            bottom: 0;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .header {
            padding: 0.75rem 1rem;
          }

          .nav-menu {
            width: 250px;
            padding: 70px 1.5rem 1.5rem;
          }

          .nav-link {
            font-size: 16px;
          }
        }

        /* Overlay for mobile menu */
        .overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
          transition: opacity 0.3s ease;
        }

        .overlay.active {
          display: block;
        }

        @media (max-width: 768px) {
          body.menu-open {
            overflow: hidden;
          }
        }
      `}</style>

            <header className="header">
                <div className="header-container">

                    {/* Logo + Tagline */}
                    <div className="logo-section">
                        <a href="/" className="logo-link">
                            <h1 className="logo-text">BlissQuants Coaching</h1>
                            <p className="tagline">Fearless Financial Training</p>
                        </a>
                    </div>

                    {/* Hamburger Menu */}
                    <div
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Navigation Menu */}
                    <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                      <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="/modules" className="nav-link" onClick={() => setIsMenuOpen(false)}>Modules</a>
                        <a href="/videos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Videos</a>
                        <a href="/certified" className="nav-link" onClick={() => setIsMenuOpen(false)}>Certified</a>
                        <a href="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
                        <a href="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>Login</a>
                    </nav>

                </div>

                {/* Overlay */}
                <div
                    className={`overlay ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                ></div>
            </header>
        </>
    );
};

export default Header;
