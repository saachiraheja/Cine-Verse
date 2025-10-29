import { useState, useEffect } from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const [favorite, setFavorite] = useState(isFavorite(movie.id));
  const [tooltip, setTooltip] = useState("Add to Favorites");

  useEffect(() => {
    const fav = isFavorite(movie.id);
    setFavorite(fav);
    setTooltip(fav ? "Remove from Favorites" : "Add to Favorites");
  }, [isFavorite, movie.id]);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
      setFavorite(false);
      setTooltip("Add to Favorites");
    } else {
      addToFavorites(movie);
      setFavorite(true);
      setTooltip("Remove from Favorites");
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            title={tooltip} // 🧠 tooltip shown on hover
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
