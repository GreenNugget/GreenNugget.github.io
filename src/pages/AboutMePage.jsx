import { Row, Col, Container } from 'react-bootstrap';

function AboutMePage() {
    return (
        <>
            <Container className='mt-5 shadow-lg p-3 mb-5 rounded-5'>
                <Row className='m-3 justify-content-evenly'>
                    <Col lg={5} xs={10}>
                        <h3 className='roboto-medium primary-color'>As a Software Engineer...</h3>
                        <p className='primary-color roboto-medium w-75 text-justify fs-5'>
                            I've worked on different projects related to both Backend and Frontend technologies, managing technologies like PHP, Java, Node and many frameworks like Laravel, Spring Boot, CodeIgniter, Angular and libraries like React. I'm a fast learner and I really enjoy documentation, which has been helpful when it comes to giving context and pitching ideas to the team; I'm all in on writing and keeping a record and a standard for both code and meetings. <br />
                            I enjoy sharing my knowledge with my team and I do the best I can to cooperate with whoever it's needed in order to provide solutions as fast as I can, but always with the quality it deserves.
                        </p>
                        <p className='primary-color roboto-medium w-75 text-justify fs-5'>
                            I also have fun when it comes to organizing and design, which is how I started using tools like Trello, Miro and Figma. I love UI/UX design and I really enjoy sketching when I'm working on new projects.
                        </p>
                    </Col>
                    <Col lg={5} xs={10}>
                        <h3 className='roboto-medium primary-color'>As a Person...</h3>
                        <p className='primary-color roboto-medium w-75 text-justify fs-5'>
                            I enjoy reading about anything whenever I have time to do it, from romance to sci-fi and tech stuff. I also love listening to music (currently working on getting my 2024 Spotify statistics on charts), writing random thoughts and cooking. I'm passionate about building Legos (Star Wars mostly), collecting old Disney toys, buying as many books as I can, collecting mugs and stickers. <br />
                            I enjoy watching tech innovation videos or just review videos and learning about new things that are getting out as much as I enjoy binge watching tv shows and movies of all kinds. I have a HUGE passion about Notion, I enjoy making templates (working on a blog rn) and just creating stuff there, I'm all in when it comes to tools related to organization and functional gadgets.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutMePage;