import React from "react";
import rightArrow from "../../assets/RightNav.svg";
import styles from "./Nav.module.css";

function RightNav({ onClick }) {
  return (
    <button className={`${styles.navButton} ${styles.right}`} onClick={onClick} aria-label="Next">
      <img src={rightArrow} alt="Next" />
    </button>
  );
}

export default RightNav;
