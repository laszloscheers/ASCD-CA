import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function NavbarApp() {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="md" className='navbar-color'>
                <Link to="/">
                    <img
                            src="/logo.png"
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="bram">Bram Stoker</Link>
                    <Link className="nav-link" to="anne">Anne Bonny</Link>
                    <Link className="nav-link" to="charles">Sir Charles Parsons</Link>
                    <Link className="nav-link" to="dame">Dame Jocelyn Bell</Link>
                    <Link className="nav-link" to="ernest">Ernest Shackleton</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br/>
        </div>
    )
}

export default NavbarApp;