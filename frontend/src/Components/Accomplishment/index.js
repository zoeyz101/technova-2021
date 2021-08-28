import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./styles.scss";


const Accomplishment = ({title,type,date,description}) =>{
    return (
        <Container className = "accomplishment">
            <Row>
                <Col>
                    {title}
                </Col>
                <Col>
                    <Button>{type}</Button>
                </Col>
            </Row>
            <Row>
                {date}
            </Row>
            <Row>
                {description}
            </Row>
        </Container>
    );
}

export default Accomplishment;
