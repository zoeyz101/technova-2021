import React from "react";
import NavBar from "../Components/NavBar";
import "./home.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';


const Home = () =>{
    return (
        <Container> 
            <NavBar /> 
            <Row className="top-components">
            <p>A LOOK AT YOUR PAST ACHIEVEMENTS</p>
                <Col className = "past-achievements">
                    <Button className="home-type-button">PERSONAL</Button>
                    <Row className="home-title">
                        Made a New Friend
                    </Row>
                    <Row className="home-date">
                        12/18/21
                    </Row>
                    <Row className="home-card-description">
                        Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat
                    </Row>
                </Col>
                
                <Col className="news-feed">
                <p>NEWS FEED</p>
                    <Row className="news">
                        <Row className="news-handle">
                            @misasi.olivia
                        </Row>
                        <Row>
                            <Col className="news-title">
                                Wind Turbine Appreciation Award
                            </Col>

                            <Col className="news-date">
                                18/05/21
                            </Col>
                        </Row>
                        <Row className="news-card-description">
                            Wind turbines are really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really cool 8)
                        </Row>
                    </Row>
                    <Row className="news">

                    </Row>
                </Col>
            </Row>
            
            <Row  className="bottom-components">
                <p>DAILY AFFIRMATION</p>
                <div className="daily-affirmation">
                    <p>You don’t have to wait to be confident. Just do it and eventually the confidence will follow. <br></br>- Carrie Fisher</p>
                </div>
                
            </Row>
        </Container>
    );
}

export default Home;
