import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import personalPic from '../../images/me.jpg';

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
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/skills'>Skills</Nav.Link>
                        <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                        <Nav.Link href='/aboutme'>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse >
            </Container>
        </Navbar>
    );
}

export default NavBar;
