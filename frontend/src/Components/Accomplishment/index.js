import React from "react";
import { Container, Row } from 'react-bootstrap';
import "./styles.scss";


const Accomplishment = ({title,type,date,description}) =>{
    return (
        <Container className = "accomplishment">
            <Row>
                <h1 className = "title">{title} </h1>
                {
                    type ==="Award"? <div id="type-button-award">{type}</div>:
                    type ==="Personal Life"? <div id="type-button-personal">{type}</div>:
                    type==="Volunteer"? <div id="type-button-volunteer">{type}</div>:
                    <div id="type-button-work">{type}</div>                }                
            </Row>
            <Row className="date">
                {date}
            </Row>
            <Row className="card-description">
                {description}
            </Row>
        </Container>
    );
}

export default Accomplishment;
