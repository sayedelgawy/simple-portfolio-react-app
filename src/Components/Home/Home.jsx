import React, { useEffect } from "react";
import styles from "./Home.module.css";
import avatar from "../../Assets/Images/avataaars.svg";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <section className={`${styles.homeBg} pt-4 pb-3`}>
        <div className="text-center">
          <img src={avatar} alt="" width="250px" />
          <div>
            <h1
              className={`text-uppercase mb-3 fs-1 fw-bolder text-white pt-4 h2 pb-2`}
            >
              start Framework
            </h1>
            <div className={`d-flex align-items-center justify-content-center`}>
              <div className={`line`}></div>
              <i className={`fa-solid fa-star text-white`}></i>
              <div className={`line`}></div>
            </div>
            <p className="text-white pt-4">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  );
}
