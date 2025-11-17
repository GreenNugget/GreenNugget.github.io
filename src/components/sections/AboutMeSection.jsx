import { Container, Row, Col, Image } from "react-bootstrap";

import MePic from '../../images/me.jpg'

function AboutMeSection() {
    return (
        <Container className='margin-top-10'>
            <h2 className='roboto-bold primary-color mb-5'>ABOUT ME</h2>
            <Row className='align-items-top justify-content-between'>
                <Col lg={6} sm={12} className='mb-5'>
                    <h3 className='roboto-bold secondary-color fw-bold mb-1'>Software Engineer</h3>
                    <h4 className='roboto-bold third-one-color fw-bold mb-4'>By: Autonomous University of Yucatan</h4>
                    <Image src={MePic} width='250' height='250' className='object-fit-cover mx-auto' roundedCircle />
                </Col>
                <Col lg={6} sm={12}>
                    <p className='primary-color roboto-regular w-75 text-justify mx-auto fs-5'>Hi! My name is <span className='secondary-color fw-bold'>Naomi</span>, I'm 26 years old and I'm a software developer. I enjoy coding and creating, but as a creative person I have other hobbies too. I consider myself someone curious, and I enjoy spending time searching tools and gadgets to <span className='secondary-color fw-bold'>improve my work and organization</span> related and non-related to my studied field.</p>
                    <p className='primary-color roboto-regular w-75 text-justify mx-auto fs-5'>
                        As a software developer I have experience with technologies like React, Spring Boot, Laravel and Angular; I've worked with these technologies as a <span className='secondary-color fw-bold'>fullstack developer</span>. I'm always willing to learn new skills and eager to grow. Nevertheless, it's important to say that I'm not only a proficient developer, but also a great administrator and <span className='secondary-color fw-bold'>team player</span> who can coordinate and get things done with quality and a timeline. <br />
                        As a person, I'm a huge <span className='secondary-color fw-bold'>fan of books</span> of any kind and music (mostly pop [Taylor Swift] and some rock here and there), I enjoy cooking, running, binge watching TV shows and <span className='secondary-color fw-bold'>spending time</span> with my family, friends and more than anything, my pets.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}


export default AboutMeSection;