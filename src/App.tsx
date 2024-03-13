import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Slide } from "./components/Slide/Slide.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { SlideCards } from "./components/SlideCards/SlideCards";
import { Routes, Route, Link } from "react-router-dom";
import * as API from "./services/apiService";

function App() {
    const [topAnime, setTopAnime] = useState([]);
    const [topCharacters, setTopCharacters] = useState([]);

    useEffect(() => {
        (async () => {
            const topAnimeData = await API.getTopAnime();
            const charactersData = await API.getTopCharacters();
            setTopAnime(topAnimeData.data);
            setTopCharacters(charactersData.data);
        })();
    }, []);

    return (
        <>
            <Navbar />
            <Slide />
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
