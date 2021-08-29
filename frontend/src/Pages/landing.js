import React, {useState} from "react";
import NavBar from "../Components/NavBar/LandingNavBar";
import "./landing.scss";
import { Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';
import Image from "../Images/landing-page-image.svg";
import Equality from "../Images/equality.svg";
import Typewriter from "typewriter-effect";

const Landing = () => {

    const [showLogin, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <NavBar isLogin = {handleShow} isSignUp = {handleShow} />
            <Row className = "landing">
                <Col sm={5} className = "slogan">
                    <Row className="description">
                    <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Overcoming imposter syndrome by tracking one accomplishment')
                                .pauseFor(1500)
                                .deleteChars(4)
                                typewriter.typeString('Women+ at a time')
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

            <Modal centered show={showLogin} onHide={handleClose}>
                <Modal.Body className = "signUp" >
                    <img src={Equality} className="equality-image" alt="Everyone in Equality"/> 
                    <Form className = "form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary"                             className="button" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </Container>

        
    )
}

export default Landing;
