import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Event from "./pages/Event";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetail from './components/EventDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/ArtInFlorina/" element={<Home />} />
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
