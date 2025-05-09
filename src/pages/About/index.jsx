import React from "react";
import data from "../../data";
import styles from "./about.module.css";
import aboutImage from "../../assets/about.jpeg"; 

const About = () => {
  return (
    <div className={styles.page}>
      <h1>About Us - Learn More About Our Mission</h1>
      <img src={aboutImage} alt="About" /> 
      <p>{data.about.content}</p>
    </div>
  );
};

export default About;

