import React from "react";
import data from "../../data";
import styles from "./gallery.module.css";

import gallery1 from "../../assets/gallery1.jpeg";
import gallery2 from "../../assets/gallery2.jpeg";
import gallery3 from "../../assets/gallery3.jpeg";

const Gallery = () => {
  return (
    <div className={styles.page}>
      <h1>Explore Our Gallery - A Collection of Moments</h1>

      <img src={gallery1} alt="Gallery 1" />
      <img src={gallery2} alt="Gallery 2" />
      <img src={gallery3} alt="Gallery 3" />

      <p>{data.gallery.content}</p>
    </div>
  );
};

export default Gallery;
