import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
function BasicExample() {
    return (
        <div className="navBody">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <h4>Flower<span>Shop</span></h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#flowers">Flowers</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#offers">Offers</Nav.Link>
                            <Nav.Link href="#contacts">Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default BasicExample;