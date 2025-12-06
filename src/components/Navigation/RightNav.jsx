import React from "react";
import rightArrow from "../../assets/RightNav.svg";
import styles from "./Nav.module.css";

function RightNav() {
  return (
    <button
      className={`${styles.navButton} slider-next-btn`}
      aria-label="Next"
    >
      <img src={rightArrow} alt="Next" className="nav-icon" />
    </button>
  );
}

export default RightNav;
