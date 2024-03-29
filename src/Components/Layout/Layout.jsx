import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Header />
      <div className={styles.spacer}></div>

      <Outlet />

      <Footer />
    </>
  );
}
