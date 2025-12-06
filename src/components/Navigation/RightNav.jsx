import React from "react";
import rightArrow from "../../assets/RightNav.svg";
import styles from "./Nav.module.css";

function RightNav() {
  return (
    <button className={`${styles.navButton} ${styles.right}`} aria-label="Next">
      <img src={rightArrow} alt="Next" />
    </button>
  );
}

export default RightNav;
