import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import "./HeroSection.css";

const HeroSection = ({ setMovies, movies}) => {

  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (e) => {
    setSearchTitle(e.target.value);
  };

  
  const handleSubmit = async () => {
    if (searchTitle === "") {
        window.alert("Enter movie name first")
    } else {
      const apikey = import.meta.env.VITE_API_KEY;
      const apiurl = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchTitle}`;
      const response = await fetch(apiurl);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setSearchDone(true);
      } else {
        setMovies([]);
      }


      if (!movies || movies.length === 0) {
        window.alert("Movie NOT Found")
      }

      setSearchTitle("");
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="tagline">Find Your Favorite Movies Instantly</h1>
        <p className="slogan">
          Search for movies by title, and explore details like year, genre,
          ratings and everything
        </p>

        <div className="main-search-box">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="search-box"
            value={searchTitle}
            onChange={handleSearch}
          />
          <button className="search-button" onClick={handleSubmit} >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
