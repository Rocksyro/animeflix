import './App.css'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { Slide } from './components/Slide/Slide.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import SlideCards from './components/SlideCards/SlideCards';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <Navbar />
      <Slide />
      <SlideCards />
      <Footer />
      <Routes>
        <Route path="/" element={<Link to="/register">Register</Link>}></Route>
      </Routes>
    </>
  )
}

export default App