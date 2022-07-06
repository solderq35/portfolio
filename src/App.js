import './index.css';
import Navbar from './Navigation/Navbar.js'
import Example from './Example/Example'
import Index from './Example/index'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Index />} />
        <Route path='/example' element={<Example/>} />
    </Routes>
    </Router>
);
}

export default App;
