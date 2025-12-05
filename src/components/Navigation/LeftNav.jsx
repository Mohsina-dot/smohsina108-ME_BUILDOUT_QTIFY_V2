import React from "react";
import leftArrow from "../../assets/LeftNav.svg";
import styles from "./Nav.module.css";

function LeftNav({ onClick }) {
  return (
    <button className={`${styles.navButton} ${styles.left}`} onClick={onClick} aria-label="Previous">
      <img src ={leftArrow} alt="Previous"/>
    </button>
  );
}

export default LeftNav;
