import React from "react";
import NavBar from "../Components/NavBar";
import "./groups.scss";
import eq from "../Images/eq.png";
import lwt from "../Images/lwt.png";
import nawl from "../Images/nawl.png";
import onwie from "../Images/onwie.png";
import weoc from "../Images/weoc.png";
import wia from "../Images/wia.png";
import wwc from "../Images/wwc.png";

import { Container, Row, Col, Button} from 'react-bootstrap';

const Groups = () => {
    return(
        <body className="list-page">
             <NavBar />
             <Container className="list">
                <Row xs={1} md={2} lg={4} className="g-4" id="cards">
                        <Col>
                            <Container className ="group">
                                <img src={eq} className="equality-image" alt="engiqueers"/> 
                                <Button className="type-button-work">Join Here</Button>
                            </Container>
                        </Col>
                        <Col>
                            <Container className ="group">
                                <img src={nawl} className="equality-image" alt="Everyone in Equality"/> 
                                <Button  className="type-button-work">Join Here</Button>
                            </Container>
                        </Col>
                        <Col>
                            <Container className ="group">
                                <img src={lwt} className="equality-image" alt="Everyone in Equality"/> 
                                <Button  className="type-button-work">Join Here</Button>
                            </Container>
                        </Col>
                        <Col>
                            <Container className ="group">
                                <img src={onwie} className="equality-image" alt="Everyone in Equality"/> 
                                <Button  className="type-button-work">Join Here</Button>                            
                            </Container>
                        </Col>
                        <Col>
                            <Container className ="group">
                                <img src={weoc} className="equality-image" alt="Everyone in Equality"/> 
                                <Button  className="type-button-work">Join Here</Button>
                            </Container>
                        </Col>
                        <Col>
                            <Container className ="group">
                                <img src={wia} className="equality-image" alt="Everyone in Equality"/>
                                <Button  className="type-button-work">Join Here</Button> 
                            </Container>
                        </Col>
                        <Col>                            
                            <Container className ="group">
                                <img src={wwc} className="equality-image" alt="Everyone in Equality"/>
                                <Button className="type-button-work">Join Here</Button> 
                            </Container>
                        </Col>
                </Row>
             </Container>
        </body>
    )

}

export default Groups; 