import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, apiEndpoint, isSongs = false, showToggle = true }) {
  const [showAll, setShowAll] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Failed to fetch data", err));
  }, [apiEndpoint]);

  const handleToggle = () => setShowAll((prev) => !prev);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {showToggle && (
          <button className={styles.collapse} onClick={handleToggle}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p>Loading...</p>
      ) : showAll && showToggle ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <AlbumCard
              key={item.id}
              image={item.image}
              title={item.title}
              follows={isSongs ? undefined : item.follows}
              likes={isSongs ? item.likes : undefined}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={items}
          renderItem={(item) => (
            <AlbumCard
              image={item.image}
              title={item.title}
              follows={isSongs ? undefined : item.follows}
              likes={isSongs ? item.likes : undefined}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;
