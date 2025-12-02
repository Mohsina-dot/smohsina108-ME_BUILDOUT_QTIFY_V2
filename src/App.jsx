import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section/Section";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" />
    </div>
  );
}

export default App;
