import './App.css'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { Slide } from './components/Slide/Slide.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import Card from './components/Card/Card';

function App() {

  return (
    <>
      <Navbar />
      <Slide />
      <Card />
      <Footer />
    </>
  )
}

export default App