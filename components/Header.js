import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFingerprint} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-2">
            <Container>
                <Navbar.Brand href="/" style={{color: "#42b883", fontSize: "1.4rem"}}>
                    <FontAwesomeIcon icon={faFingerprint} style={{marginRight: "0.6rem"}}/>
                    <span>webRSA</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/tutorial">Anleitung</Nav.Link>
                        <Nav.Link href="/keygen">Schlüssel erzeugen</Nav.Link>
                        <Nav.Link href="/crpyt">Ver-/Entschlüsseln</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}
