import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import DisabledPill from '../DisabledPill';
import skillsInfo from '../../content/skills.json';

function SkillsSection(){
    const location = useLocation();
    const showTitle = location.pathname.includes('skills');

    return (
        <Container className='margin-top-10'>
            {!showTitle && (
                <h2 className='roboto-bold main-white mb-3'>SKILLS</h2>
            )}
            <h4 className='roboto-medium clear-blue-color mb-3'>Tech Skills</h4>
            <div className='d-flex flex-wrap align-items-center justify-content-start mb-5'>
                {skillsInfo.techSkills.map((tech) => (
                    <DisabledPill key={tech.id} text={tech.name} />
                ))
                }
            </div>
            <h4 className='roboto-medium clear-blue-color mb-3'>Soft Skills</h4>
            <div className='d-flex flex-wrap align-items-center justify-content-start mb-5'>
                {skillsInfo.softSkills.map((tech) => (
                    <DisabledPill key={tech.id} text={tech.name} />
                ))
                }
            </div>
        </Container>
    );
}

export default SkillsSection;