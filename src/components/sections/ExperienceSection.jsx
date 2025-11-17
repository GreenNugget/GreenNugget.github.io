import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import experienceInfo from '../../content/experience.json';

function ExperienceSection () {
    return (
        <Container className='margin-top-10'>
            <h2 className='roboto-bold primary-color mb-3'>EXPERIENCE</h2>
            <Row>
                <Col lg={5} xs={10} className='mt-5 custom-border-end'>
                    <p className='primary-color roboto-regular w-75 text-justify fs-5'>I have <span className='secondary-color fw-bold'>4 years of experience</span> in web development. I've worked as a backend and frontend developer and thus, I'm <span className='secondary-color fw-bold'>proficient</span> in database design, API development, consumption and management, database consults and tools like Notion, Figma, Trello, GitHub, Jira, AWS and other gadgets that help with the development and improve the organization/workflow.</p> <br />
                    <p className="primary-color roboto-regular w-75 text-justify fs-5 mb-5">I'm currently handling a cross-functional team inside my own to help with <span className='secondary-color fw-bold'> Incidents and Major Incidents </span>, this has giving me valuable leadership experience and the opportunity to prove myself when presented stressful situations that impact our applications used by many users.</p>
                    <Link to='/aboutme' className='dark-button roboto-bold mt-5 fs-5 p-3'>Know More</Link>
                </Col>
                <Col lg={7} xs={10}>
                    <Row>
                        {experienceInfo.formalJobs.map((job) => (
                            <Row key={job.id} className='mb-5 p-0 align-items-top justify-content-end'>
                                <Col lg={4} className='text-end'>
                                    <h5 className='roboto-medium primary-color'>{job.timeline}</h5>
                                </Col>
                                <Col lg={7}>
                                    <h4 className='roboto-medium primary-color text-right'>{job.job_title} - {job.work_place}</h4>
                                    <p className='secondary-color roboto-regular text-justify mx-auto fs-5'>{job.job_description}</p>
                                </Col>
                            </Row>
                        ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}


export default ExperienceSection;