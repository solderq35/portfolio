import './index.css';
import Navbar from './Navigation/Navbar.js';
import Index from './Pages/index';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import NotFound from './Pages/notFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;