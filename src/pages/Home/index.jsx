import React from "react";
import data from "../../data";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <h1>{data.home.title}</h1>
      <img src="src/assets/home.jpeg " alt="Home" />
      <p>{data.home.content}</p>
    </div>
  );
};

export default Home;