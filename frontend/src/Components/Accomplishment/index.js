import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./styles.scss";


const Accomplishment = ({title,type,date,description}) =>{
    return (
        <Container className = "accomplishment">
            <Button className="type-button">{type}</Button>
            <Row className="title">
               {title}
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
