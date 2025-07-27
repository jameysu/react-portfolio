import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jems</h1>
        <p className={styles.description}>
          I'm a full-stack developer with a year and a half of experience using
          React and NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="mailto:cansadojamesmichael40@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1xr2ltDk-3s7tuHeAkHRqQGmKsNGd46Am/view"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/portfolio_image.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
