import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={`${styles.footerInfoBg} py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-5">
              <h2 className={`text-uppercase text-white text-center ${styles.headerFontSize}`}>
                location
              </h2>
              <p className="text-white text-center">2215 John Daniel Drive</p>
              <p className="text-white text-center">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 py-5">
              <h2 className={`text-uppercase text-white text-center ${styles.headerFontSize}`}>
                around the web
              </h2>
              <div className={`icons text-center`}>
                <i className={`fa-brands fa-facebook mx-1 ${styles.icon}`}></i>
                <i className={`fa-brands fa-twitter mx-1 ${styles.icon}`}></i>
                <i className={`fa-brands fa-linkedin-in mx-1 ${styles.icon}`}></i>
                <i className={`fa-solid fa-globe mx-1 ${styles.icon}`}></i>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <h2 className={`text-uppercase text-white text-center ${styles.headerFontSize}`}>
              ABOUT FREELANCER
              </h2>
              <p className="text-white text-center"> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
              
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footerCopyrightBg} py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <p className="text-white text-center">
                  Copyright © Your Website 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
