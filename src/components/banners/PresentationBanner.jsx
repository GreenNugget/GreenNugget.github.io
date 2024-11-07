import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PresentationBanner() {
    return (
        <Container className='margin-top-10'>
            <h5 className='roboto-medium clear-blue-color'>Hi, my name is</h5>
            <h1 className='roboto-bold main-white'>Naomi García Sánchez</h1>
            <h3 className='roboto-bold main-white'>Web Developer Enthusiast</h3>
            <p className='roboto-regular main-white w-50 mb-5 fs-5'>I'm a <span className='clear-blue-color'>software engineer</span> from Yucatán, México. I have a passion for web development and a background that covers multiple technologies and tools related and non-related to software development.</p>
            <Link to='/portfolio' className='dark-button roboto-bold fs-5'>Watch Portfolio</Link>
        </Container>
    );
}

export default PresentationBanner;