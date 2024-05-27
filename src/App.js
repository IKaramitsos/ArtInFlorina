import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Event from "./pages/Event";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetail from './components/EventDetail';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/ArtInFlorina" element={<Navigate to="/" />} /> 
          <Route exact path="/" element={<Home />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/event/:id" element={<EventDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
