import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-light">
        {/* Single Page Layout - Home contains everything */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/achievements" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;