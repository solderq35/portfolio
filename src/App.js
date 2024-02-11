import './index.css';
import Navbar from './Navigation/Navbar.js';
import Portfolio from './Pages/index';
import Contact from './Pages/contact';
import NotFound from './Pages/notFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
