import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/aboutPage/about';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
