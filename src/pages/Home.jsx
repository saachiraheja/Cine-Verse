import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const[searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Terminator", release_date: 2024},
        {id: 1, title: "F1", release_date: 2023},
        {id: 1, title: "Saiyara", release_date: 2026}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };
    
    
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}  
                />

                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            <div className="movies-grid">   
                {movies.map(
                    (movie) => 
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
        </div>
    );
}

export default Home;