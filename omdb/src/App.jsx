import { useState } from "react";
import "./App.css";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <HeroSection setMovies={setMovies} movies={movies} />
      <CardSection movies={movies} />
    </>
  );
}

export default App;
