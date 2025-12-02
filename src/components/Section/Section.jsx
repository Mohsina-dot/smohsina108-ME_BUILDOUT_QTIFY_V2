import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Failed to fetch albums", err));
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.collapse}>Collapse</button>
      </div>
      <div className={styles.grid}>
        {albums.length === 0 ? (
          <p>Loading albums...</p>
        ) : (
          albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Section;
