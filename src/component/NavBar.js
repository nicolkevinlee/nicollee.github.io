import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () =>{
    return (
        <Navbar expand="lg">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/works">Works</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Navbar>
    );
}

