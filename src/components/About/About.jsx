import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer specializing in responsive,
                user-friendly, and performance-optimized websites, with a focus
                on clean code, modern design, and seamless user interfaces
                across all devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing high-performance, scalable back-end
                systems and APIs with a focus on robust server-side logic,
                efficient database interactions, and secure, well-documented
                RESTful endpoints that integrate seamlessly with front-end
                applications while ensuring clean architecture, performance
                tuning, and reliability under varying loads.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
