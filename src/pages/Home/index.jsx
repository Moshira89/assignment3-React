import React from "react";
import data from "../../data";
import styles from "./home.module.css";
import homeImage from "../../assets/home.jpeg"; 

const Home = () => {
  return (
    <div className={styles.page}>
      <h1>{data.home.title}</h1>
      <img src={homeImage} alt="Home" /> 
      <p>{data.home.content}</p>
    </div>
  );
};

export default Home;
