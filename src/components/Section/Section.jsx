import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Failed to fetch albums", err));
  }, [apiEndpoint]);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.collapse} onClick={handleToggle}>
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {albums.length === 0 ? (
        <p>Loading albums...</p>
      ) : isCollapsed ? (
        <Carousel data={albums} />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
