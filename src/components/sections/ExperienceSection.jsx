import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import experienceInfo from '../../content/experience.json';

function ExperienceSection () {
    return (
        <Container className='margin-top-10'>
            <h2 className='roboto-bold main-white mb-3'>EXPERIENCE</h2>
            <Row>
                <Col lg={5} xs={10} className='mt-5 border-end'>
                    <p className='main-white roboto-medium w-75 text-justify fs-5'>I have <span className='clear-blue-color'>3 years of experience</span> in web development. I've worked as a backend and frontend developer and thus, I'm <span className='clear-blue-color'>proficient</span> in database design, API development, consumption and management, database consults and tools like Notion, Figma, Trello, GitHub, Jira, AWS and other gadgets that help with the development and improve the organization/workflow.</p> <br />
                    <Link to='/aboutme' className='dark-button roboto-bold mt-5 fs-5'>Know More</Link>
                </Col>
                <Col lg={7} xs={10}>
                    <Row>
                        {experienceInfo.formalJobs.map((job) => (
                            <Row key={job.id} className='mb-5 p-0 align-items-top justify-content-end'>
                                <Col lg={4} className='text-end'>
                                    <h5 className='roboto-medium clear-blue-color'>{job.timeline}</h5>
                                </Col>
                                <Col lg={7}>
                                    <h4 className='roboto-medium main-white text-right'>{job.job_title} - {job.work_place}</h4>
                                    <p className='main-white roboto-regular text-justify mx-auto fs-5'>{job.job_description}</p>
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