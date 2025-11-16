import { Container, Row, Col, Image } from "react-bootstrap";

import MePic from '../../images/me.jpg'

function AboutMeSection() {
    return (
        <Container className='margin-top-10'>
            <h2 className='roboto-bold main-white mb-5'>ABOUT ME</h2>
            <Row className='align-items-top justify-content-between'>
                <Col lg={6} sm={12} className='mb-5'>
                    <h3 className='roboto-bold clear-blue-color mb-1'>Software Engineer</h3>
                    <h4 className='roboto-bold main-white mb-4'>By: Autonomous University of Yucatan</h4>
                    <Image src={MePic} width='250' height='250' className='object-fit-cover mx-auto' roundedCircle />
                </Col>
                <Col lg={6} sm={12}>
                    <p className='main-white roboto-regular w-75 text-justify mx-auto fs-5'>Hi! My name is <span className='clear-blue-color'>Naomi</span>, I'm 26 years old and I'm a software developer. I enjoy web development and design, but as a creative person I have other hobbies too. I consider myself a nerd, and I enjoy spending time searching tools and gadgets to <span className='clear-blue-color'>improve my work and organization</span> related and non-related to my studied field.</p>
                    <p className='main-white roboto-regular w-75 text-justify mx-auto fs-5'>
                        As a software developer I have experience with technologies like React, Spring Boot, Laravel and Angular; I've worked with these technologies as a <span className='clear-blue-color'>fullstack developer</span>. I'm always open to learning new skills and eager to grow. Nevertheless, it's important to say that I'm not only a proficient developer, but also a great administrator and <span className='clear-blue-color'>team player</span> who can coordinate and do whatever it's needed. <br />
                        As a person, I'm a huge <span className='clear-blue-color'>fan of books</span> of any kind and music (mostly pop [Taylor Swift] and some rock here and there), I enjoy cooking, running, binge watching TV shows and <span className='clear-blue-color'>spending time</span> with my family, friends and more than anything, my pets.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}


export default AboutMeSection;