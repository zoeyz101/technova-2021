import React from "react";
import NavBar from "../Components/NavBar/LandingNavBar";
import "./landing.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from "../Images/landing-page-image.svg";
import Typewriter from "typewriter-effect";

const Landing = () =>{
    return (
        <Container>
            <NavBar />
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
                        <Button variant="dark" className="join-now-button">JOIN NOW</Button>
                    </Row>
                </Col>
                <Col sm={6}>
                    <img src={Image} className="landing-image" alt="Women Allies"/>
                </Col> 
            </Row>
        </Container>
    )
}

export default Landing;
