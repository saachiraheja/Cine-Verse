import { Route, Routes } from "react-router-dom"
import MovieCard from "./components/MovieCard" 
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import "./css/App.css"

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App
