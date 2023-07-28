import './index.css';
import Navbar from './Navigation/Navbar.js';
import Index from './Pages/index';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import NotFound from './Pages/notFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
