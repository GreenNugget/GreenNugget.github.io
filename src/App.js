import { Route, Routes } from 'react-router-dom'
import NavBar from './components/nav/NavBar';
import Footer from './components/nav/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
