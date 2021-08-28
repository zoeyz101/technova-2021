import React from "react";
import NavBar from "../Components/NavBar/LandingNavBar";
import "./landing.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from "../Images/landing-page-image.svg";

const Landing = () =>{
    return (
        <Container>
            <NavBar />
            <Row className = "landing">
                <Col sm={6} className = "slogan">
                    <Row className="description">
                        Overcoming imposter syndrome by tracking one accomplishWomen+ at a time.
                    </Row>
                    <Row>
                        <Button variant="dark" className="join-now-button">JOIN NOW</Button>
                    </Row>
                </Col>
                <Col sm={6} >
                    <img src={Image} className="landing-image" alt="Women Allies"/>
                </Col> 
            </Row>
        </Container>
    )
}

export default Landing;
