import React from "react";
import data from "../../data";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.page}>
      <h1>Explore Our Gallery - A Collection of Moments</h1>
      <img src="src/assets/gallery1.jpeg" alt="Gallery" />
      <img src="src/assets/gallery2.jpeg" alt="Gallery" />
      <img src="src/assets/gallery3.jpeg" alt="Gallery" />

      <p>{data.gallery.content}</p>
    </div>
  );
};

export default Gallery;
