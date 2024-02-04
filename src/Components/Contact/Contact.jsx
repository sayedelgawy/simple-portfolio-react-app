import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  const [userNameLabel,setUserNameLabel]=useState(false);
  const [userAgeLabel,setUserAgeLabel] =useState(false);
  const [userEmailLabel,setUserEmailLabel] =useState(false);
  const [userPasswordLabel,setUserPasswordLabel] =useState(false);


  function userNameInputHandler(e) {
    const inputValue = e.target.value.trim();

    if (inputValue !== "") {
      setUserNameLabel(true);
    }else{
      setUserNameLabel(false);
    }
  }

  function userAgeInputHandler(e) {
    const inputValue = e.target.value.trim();

    if (inputValue !== "") {
      setUserAgeLabel(true);
    }else{
      setUserAgeLabel(false);
    }
  }

  function userEmailInputHandler(e) {
    const inputValue = e.target.value.trim();

    if (inputValue !== "") {
      setUserEmailLabel(true);
    }else{
      setUserEmailLabel(false);
    }
  }

  function userPasswordInputHandler(e) {
    const inputValue = e.target.value.trim();

    if (inputValue !== "") {
      setUserPasswordLabel(true);
    }else{
      setUserPasswordLabel(false);
    }
  }

  function formActionHandler(e){
    e.preventDefault();
  }

  return (
    <>
      <div className="py-5">
        <header>
          <h1 className="h2 text-uppercase mb-3 fs-1 fw-bolder text-center">
            conatct section
          </h1>
          <div className={`d-flex align-items-center justify-content-center`}>
            <div className={`line bg-dark`}></div>
            <i className={`fa-solid fa-star text-dark`}></i>
            <div className={`line bg-dark`}></div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form onSubmit={formActionHandler}>
                <div>
                  <label htmlFor="userName" className={`${styles.labelStyle} ${userNameLabel && 'top-0'}`} >
                    userName :
                  </label>
                  <input
                    type="text"
                    placeholder="userName"
                    id="userName"
                    onInput={userNameInputHandler}
                    className={`${styles.userInput} w-100 d-block form-control`}
                  />
                </div>
                <div className={`pt-2`}>
                  <label htmlFor="userAge" className={`${styles.labelStyle} ${userAgeLabel && 'top-0'}`} >
                  userAge :
                  </label>
                  <input
                    type="text"
                    placeholder="userAge"
                    id="userAge"
                    onInput={userAgeInputHandler}
                    className={`${styles.userInput} w-100 d-block form-control`}
                  />
                </div>
                <div className={`pt-2`}>
                  <label htmlFor="userEmail" className={`${styles.labelStyle} ${userEmailLabel && 'top-0'}`} >
                  userEmail :
                  </label>
                  <input
                    type="email"
                    placeholder="userEmail"
                    id="userEmail"
                    onInput={userEmailInputHandler}
                    className={`${styles.userInput} w-100 d-block form-control`}
                  />
                </div>
                <div className={`pt-2`}>
                  <label htmlFor="userPassword" className={`${styles.labelStyle} ${userPasswordLabel && 'top-0'}`} >
                  userPassword :
                  </label>
                  <input
                    type="password"
                    placeholder="userPassword"
                    id="userPassword"
                    onInput={userPasswordInputHandler}
                    className={`${styles.userInput} w-100 d-block form-control`}
                  />
                </div>
                <button className={`btn mt-4 text-white ${styles.buttonStyle}`}> send Message </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
