import React, { useState } from "react";
import styles from "./Project.module.css";

export default function Project(props) {
  const [fullScreen, setFullScreen] = useState(false);

  function openFullScreen() {
    setFullScreen(true);
  }

  function closeFullScreen() {
    setFullScreen(false);
  }

  function handleImgClick(e) {
    e.stopPropagation();
  }

  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div
          onClick={openFullScreen}
          className={`rounded-3 overflow-hidden position-relative`}
        >
          <img src={props.img} alt="" className={`w-100`} />
          <div
            className={`${styles.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div
          onClick={closeFullScreen}
          className={`${
            styles.fullScreen
          } position-fixed start-0 w-100 top-0 h-100 ${
            fullScreen ? "d-flex" : "d-none"
          } justify-content-center align-items-center`}
        >
          <div className={`w-50`} onClick={handleImgClick}>
            <img src={props.img} alt="" className={`w-100`} />
          </div>
        </div>
      </div>
    </>
  );
}
