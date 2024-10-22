import "./CardSection.css";
import React from "react";

const Card = ({ movies}) => {
  const handleClick = (id) => {
    window.open(`https://www.imdb.com/title/${id}`, "_blank");
  };

  return (
    <section>
      {movies.map((currEle, idx) => {
        return (
          <div
            className="main-card"
            key={idx}
            onClick={() => handleClick(currEle.imdbID)}
          >
            <img className="poster" src={currEle.Poster} alt="poster" />
            <h4 className="title">{currEle.Title}</h4>
            <p className="year">{currEle.Year}</p>
            <p className="type">{currEle.Type}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
