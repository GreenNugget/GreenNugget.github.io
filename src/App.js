import NavBar from './components/nav/NavBar';
import PresentationBanner from './components/banners/PresentationBanner';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import AboutMeSection from './components/sections/AboutMeSection';
import Footer from './components/nav/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <PresentationBanner className='mb-5'/>
      <SkillsSection />
      <ExperienceSection />
      <AboutMeSection />
      <Footer />
    </>
  );
}

export default App;
