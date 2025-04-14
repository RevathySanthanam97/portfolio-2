import './App.scss'
import {
  Route,
  Routes,
} from "react-router-dom";
import About from './Pages/About';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects">
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/omnishop" element={<>Hey</>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
