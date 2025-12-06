import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, apiEndpoint }) {
  const [showAll, setShowAll] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Failed to fetch albums", err));
  }, [apiEndpoint]);

  const handleToggle = () => setShowAll((prev) => !prev);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.collapse} onClick={handleToggle}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {albums.length === 0 ? (
        <p>Loading albums...</p>
      ) : showAll ? (
        <div className={styles.grid}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
              likes={album.likes}
            />
          ))}
        </div>
      ) : (
        <Carousel data={albums} />
      )}
    </div>
  );
}

export default Section;
