import React, {useState} from "react";
import NavBar from "../Components/NavBar/LandingNavBar";
import "./landing.scss";
import { Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';
import Image from "../Images/landing-page-image.svg";
import Equality from "../Images/equality.svg";
import Typewriter from "typewriter-effect";

const Landing = () => {

    const [showLogin, setLoginShow] = useState(false);
    const [showSignUp, setSignUpShow] = useState(false);
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);
    const handleSignUpClose = () => setSignUpShow(false);
    const handleSignUpShow = () => setSignUpShow(true);
    

    return (
        <Container>
            <NavBar isLogin = {handleLoginShow} isSignUp = {handleSignUpShow} />
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
                            onClick={handleSignUpShow}
                            className="join-now-button"
                        > JOIN NOW</Button>
                    </Row>
                </Col>
                <Col sm={6}>
                    <img src={Image} className="landing-image" alt="Women Allies"/>
                </Col> 
            </Row>

            <Modal centered show={showLogin} onHide={handleLoginClose}>
                <Modal.Body className = "login" >
                    <img src={Equality} className="equality-image" alt="Everyone in Equality"/> 
                    <Form className = "form">
                        <Form.Group className="mb-3" controlId="formBasicEmail" alt="Enter your email" >
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" alt="Enter your password">
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <Button variant="primary" className="button" type="submit" alt="Login Button">
                            Log In
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal centered show={showSignUp} onHide={handleSignUpClose}>
                <Modal.Body className = "signup" >
                    <img src={Equality} className="equality-image" alt="Everyone in Equality"/> 
                    <Form className = "form">
                        <Form.Group className="mb-3" controlId="formBasicName" alt="Enter your name">
                            <Form.Control type="email" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" alt="Enter your email">
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" alt="Enter your password">
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formConfirmPassword" alt="Re-Enter your password">
                            <Form.Control type="password" placeholder="Re-Enter your password" />
                        </Form.Group>

                        <Button variant="primary" className="button" type="submit" alt="Sign Up Button">
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </Container>

        
    )
}

export default Landing;
