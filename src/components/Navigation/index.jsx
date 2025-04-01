import React from "react";
import styles from "./Navigation.module.css";

const Navigation = ({ onNavigate }) => {
  return (
    <nav className={styles.nav}>
      <button onClick={() => onNavigate("home")}>Home</button>
      <button onClick={() => onNavigate("about")}>About</button>
      <button onClick={() => onNavigate("gallery")}>Gallery</button>
    </nav>
  );
};

export default Navigation;
