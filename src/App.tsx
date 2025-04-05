import './App.css'
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Logo from './components/Logo';

function App() {

  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
