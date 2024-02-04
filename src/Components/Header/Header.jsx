import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    
  },[]);

  return (
    <>
      <header className="position-relative">
        <nav  className={`fixed-top navbar navbar-expand-lg navbar-dark ${styles.smoothScroll} ${styles.bgSecondrayColor} ${scrolling ? 'py-2' : 'py-4'}`}>
          <div className="container">
            <Link className="navbar-brand text-uppercase fw-bold fs-2" to="/">
            START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className={`nav-item px-2 m-1 ${location.pathname === '/about' ? 'active' : ''}`}>
                  <Link className="nav-link text-uppercase text-white fw-bold" to="about">
                    About
                  </Link>
                </li>
                <li className={`nav-item px-2 m-1 ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                  <Link className="nav-link text-uppercase text-white fw-bold" to="portfolio">
                  portfolio
                  </Link>
                </li>
                <li className={`nav-item px-2 m-1 ${location.pathname === '/contact' ? 'active' : ''}`}>
                  <Link className="nav-link text-uppercase text-white fw-bold" to="contact">
                  contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
