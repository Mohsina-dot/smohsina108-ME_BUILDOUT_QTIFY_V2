import React from "react";
import styles from "./Hero.module.css";
import headphones from "../assets/headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textBlock}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <div className={styles.imageBlock}>
        <img src={headphones} width={212} alt="headphones" />
      </div>
    </div>
    </div>
    </div>
  );
}

export default Hero;
