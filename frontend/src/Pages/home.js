import React from "react";
import NavBar from "../Components/NavBar";
import News from "../Components/Newsfeed";
import Past from "../Components/Past";

import "./home.scss";
import { Container, Row, Col } from 'react-bootstrap';


const Home = () =>{
    return (
        <Container> 
            <NavBar /> 
            <Row className="top">
                <Col sm={4}>
                    <div className ="affirmation-title">
                        DAILY AFFIRMATION
                    </div>
                    <div className="daily-affirmation">
                        You don’t have to wait to be confident. Just do it and eventually the confidence will follow. <br></br>- Carrie Fisher
                    </div>
                </Col>
                <Col>
                    <div className="achievement-title">
                        A LOOK AT YOUR PAST ACHIEVEMENTS
                    </div>
                    <div className="past-achievements">
                        {past.map((input)=>(
                        <><br></br><Past title = {input.title} date  = {input.date} description = {input.description}/><br></br></>
                        ))}
                    </div>
                    
                </Col>
            </Row>
            <Row className="news-title">
                NEWS FEED
            </Row>
            <div className="news">
                {news.map((input)=>(
                    <><br></br><News user ={input.user} title = {input.title} date  = {input.date} description = {input.description}/><br></br></>
                ))}
            </div>
        </Container>
    );
}

const news = [
    {
        user: "misasi.olivia",
        title: "Wind Turbine Appreciation Award",
        date: "18/05/21",
        description: "Wind turbines are really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really cool 8)\n\n" 
    },
    {
        user: "misasi.olivia",
        title: "Wind Turbine Appreciation Award",
        date: "18/05/21",
        description: "Wind turbines are really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really cool 8)\n\n"
    }, 
    {
        user: "misasi.olivia",
        title: "Wind Turbine Appreciation Award",
        date: "18/05/21",
        description: "Wind turbines are really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really cool 8)\n\n"
    }
]

const past = [
    {
        title: "Made a New Friend",
        date: "12/18/21",
        description: "Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat"
    },
    {
        title: "Made a New Friend",
        date: "12/18/21",
        description: "Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat",
    },
    {
        title: "Made a New Friend",
        date: "12/18/21",
        description: "Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat Their name is Matt. He is a Starbucks barista with too much time on his hands and too little energy to do anything about ththat"
    }
]
export default Home;
