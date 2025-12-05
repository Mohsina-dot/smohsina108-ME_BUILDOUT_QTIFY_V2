import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "../components/Section/Section";

function Home() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setTopAlbums(res.data))
      .catch((err) => console.error("Failed to fetch top albums", err));

    axios
      .get("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => setNewAlbums(res.data))
      .catch((err) => console.error("Failed to fetch new albums", err));
  }, []);

  return (
    <div>
      <Section title="Top Albums" apiEndpoint="https://qtify-backend.labs.crio.do/albums/top" />
      <Section title="New Albums" apiEndpoint="https://qtify-backend.labs.crio.do/albums/new" />
    </div>
  );
}

export default Home;
