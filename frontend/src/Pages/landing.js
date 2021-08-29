import React, {useState, setShow, styled} from "react";
import NavBar from "../Components/NavBar/LandingNavBar";
import "./landing.scss";
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import Image from "../Images/landing-page-image.svg";
import Typewriter from "typewriter-effect";

const Landing = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <NavBar />
            <Row className = "landing">
                <Col sm={5} className = "slogan">
                    <Row className="description">
                    <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Overcoming imposter syndrome by tracking one accomplishment.')
                                .pauseFor(1500)
                                .deleteChars(5)
                                typewriter.typeString('Women+ at a time.')
                                .start();
                            }}
                            />
                    </Row>
                    <Row>
                        <Button 
                            variant="dark"
                            onClick={handleShow}
                            className="join-now-button"
                        > JOIN NOW</Button>
                    </Row>
                </Col>
                <Col sm={6}>
                    <img src={Image} className="landing-image" alt="Women Allies"/>
                </Col> 
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </Container>

        
    )
}

export default Landing;
