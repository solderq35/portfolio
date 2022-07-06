import './index.css';
import Navbar from './Navigation/Navbar.js'
import Example from './Example/Example'
import Index from './Example/index'
import Projects from './Example/projects'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Index />} />
        <Route path='/example' element={<Example/>} />
		<Route path='/projects' element={<Projects/>} />
    </Routes>
    </Router>
);
}

export default App;
