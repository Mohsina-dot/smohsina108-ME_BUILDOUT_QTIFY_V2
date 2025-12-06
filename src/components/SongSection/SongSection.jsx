import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Section from "../Section/Section";

function SongSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/songs")
      .then(res => setSongs(res.data));
    axios.get("https://qtify-backend.labs.crio.do/genres")
    .then(res => setGenres(res.data.data));
}, []);

  const handleChange = (event, newValue) => setSelectedGenre(newValue);

  const filteredSongs = selectedGenre === "All"
    ? songs
    : songs.filter(song => song.genre === selectedGenre);

  return (
    <div>
      <h2>Songs</h2>
      <Tabs value={selectedGenre} onChange={handleChange}>
        <Tab label="All" value="All" />
        {genres.map(g => (
          <Tab key={g.key} label={g.label} value={g.label} />
        ))}
      </Tabs>

      <Section
        title=""
        isSongs
        showToggle={false}
        items={filteredSongs}
      />
    </div>
  );
}

export default SongSection;
