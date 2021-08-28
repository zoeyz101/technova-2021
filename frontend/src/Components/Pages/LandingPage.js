import React from "react";
import "./styles.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from "./landing-page-image.svg";

const LandingPage = () => {
    return (
        <Container>
            <Row className = "landing">
                <Col sm={6} className = "slogan">
                    <Row className="description">
                        Overcoming imposter syndrome by tracking one accomplishWomen+ at time
                    </Row>
                    <Row>
                        <Button variant="dark" className="join-now-button">JOIN NOW</Button>
                    </Row>
                </Col>
                <Col sm={6} >
                    <img src={Image} className="landing-image" alt="Landing Page Image"/>
                </Col> 
            </Row>
        </Container>

    );
  };
  
  export default LandingPage;
  