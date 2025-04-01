import React from "react";
import data from "../../data";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.page}>
      <h1>About Us - Learn More About Our Mission</h1>
      <img src="src/assets/about.jpeg" alt="Gallery" />
      <p>{data.about.content}</p>
    </div>
  );
};

export default About;
