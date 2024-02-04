import React, { useEffect } from "react";
import styles from "./About.module.css";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className={`${styles.aboutBg} py-5`}>
        <div className={`container py-5`}>
          <div className="row">
            <div className="col-md-12 ">
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white text-center">
                about component
              </h2>
            </div>
          </div>
          <div className={`d-flex align-items-center justify-content-center`}>
            <div className={`line`}></div>
            <i className={`fa-solid fa-star text-white`}></i>
            <div className={`line`}></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="text-white pt-4"> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
            </div>
            <div className="col-md-6">
              <p className="text-white pt-4"> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
