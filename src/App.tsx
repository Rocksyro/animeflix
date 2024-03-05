import './App.css'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { Slide } from './components/Slide/Slide.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import {SlideCards} from './components/SlideCards/SlideCards';
import { Routes, Route, Link } from 'react-router-dom';
import * as API from './services/apiService';

function App() {
  return (
    <>
      <Navbar />
      <Slide />
      <SlideCards getAnime={API.getTopAnime}/>
      <SlideCards getAnime={API.getTopAnime}/>
      <Footer />
      <Routes>
        <Route path="/" element={<Link to="/register">Register</Link>}></Route>
      </Routes>
    </>
  )
}

export default App