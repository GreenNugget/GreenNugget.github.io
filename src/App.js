import { Route, Routes } from 'react-router-dom'
import NavBar from './components/nav/NavBar';
import Footer from './components/nav/Footer';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/skills" element={<SkillsPage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path='/aboutme' element={<AboutMePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
