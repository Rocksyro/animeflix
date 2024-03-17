import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { CallToActionSlide } from "./components/CallToActionSlide/CallToActionSlide.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { SlideCards } from "./components/SlideCards/SlideCards";
import { Routes, Route, Link } from "react-router-dom";
import * as API from "./services/apiService";

function App() {
  const [topAnime, setTopAnime] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    (async () => {
      const topAnimeData = await API.getTopAnime();
      const charactersData = await API.getTopCharacters();
      const animesData = await API.getAnimes();
      setTopAnime(topAnimeData.data);
      setTopCharacters(charactersData.data);
      setAnimes(animesData);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <CallToActionSlide cardsData={animes} />
      <SlideCards cardsData={topAnime} />
      <SlideCards cardsData={topCharacters} />
      <Footer />
      <Routes>
        <Route path="/" element={<Link to="/register">Register</Link>}></Route>
      </Routes>
    </>
  );
}

export default App;
