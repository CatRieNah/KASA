import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/aboutPage/about';
import ErrorPage from './pages/errorPage/error';
import Apartement from './pages/logements/apartment';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/logements/:id" element={<Apartement />} />
      </Routes>
    </Router>
  );
}

export default App;
