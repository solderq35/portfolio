import './index.css';
import Navbar from './Navigation/Navbar.js';
import Index from './Pages/index';
import Projects from './Pages/projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
