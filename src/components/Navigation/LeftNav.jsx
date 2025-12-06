import React from "react";
import leftArrow from "../../assets/LeftNav.svg";
import styles from "./Nav.module.css";

function LeftNav() {
  return (
    <button
      className={`${styles.navButton} slider-prev-btn`}
      aria-label="Previous"
    >
      <img src={leftArrow} alt="Previous" className="nav-icon" />
    </button>
  );
}

export default LeftNav;
