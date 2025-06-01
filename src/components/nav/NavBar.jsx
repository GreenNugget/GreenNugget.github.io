import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import personalPic from '../../images/me.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href='/' className='w-auto'>
                    <Image src={personalPic} roundedCircle width='130' height='120' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className='text-right flex-grow-0'>
                    <Nav className='roboto-medium fs-4'>
                        <Link to='/' className='menu-nav-link'>Home</Link>
                        <Link to='/skills' className='menu-nav-link'>Skills</Link>
                        <Link to='/portfolio' className='menu-nav-link'>Portfolio</Link>
                        <Link to='/aboutme' className='menu-nav-link'>About Me</Link>
                    </Nav>
                </Navbar.Collapse >
            </Container>
        </Navbar>
    );
}

export default NavBar;
