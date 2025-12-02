import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import styles from "./Card.module.css";

function AlbumCard({ image, title, follows }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={styles.image}
      />
      <CardContent className={styles.content}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
        <Typography variant="body2" className={styles.title}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
