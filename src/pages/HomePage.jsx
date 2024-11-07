import PresentationBanner from "../components/banners/PresentationBanner";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import AboutMeSection from "../components/sections/AboutMeSection";

function HomePage () {
    return (
        <>
            <PresentationBanner className='mb-5' />
            <SkillsSection />
            <ExperienceSection />
            <AboutMeSection />
        </>
    );
}

export default HomePage;