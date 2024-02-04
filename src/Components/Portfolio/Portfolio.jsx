import React, { useEffect } from "react";
import Project from "../Project/Project";
import img1 from "../../Assets/Images/poert1.png";
import img2 from "../../Assets/Images/port2.png";
import img3 from "../../Assets/Images/port3.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img1,
    },
    {
      id: 5,
      img: img2,
    },
    {
      id: 6,
      img: img3,
    },
  ];
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <header className="pt-5">
        <h1 className="h2 text-uppercase mb-3 fs-1 fw-bolder text-center">
          portfolio component
        </h1>
        <div className={`d-flex align-items-center justify-content-center`}>
          <div className={`line bg-dark`}></div>
          <i className={`fa-solid fa-star text-dark`}></i>
          <div className={`line bg-dark`}></div>
        </div>
      </header>
      <div className="pb-5 pt-3 container">
        <div className="row g-5">
          {projects.map((project) => (
            <Project key={project.id} img={project.img} />
          ))}
        </div>
      </div>
    </>
  );
}
