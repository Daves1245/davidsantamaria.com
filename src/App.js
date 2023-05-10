import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" elements={<Projects/>} />
            </Routes>
        </Router>
    );
}

export default App;
