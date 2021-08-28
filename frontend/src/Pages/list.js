import React from "react";
import NavBar from "../Components/NavBar";
import Accomplishment from "../Components/Accomplishment"
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./list.scss";


const List = () =>{
    const sample_accomplishment = {
        title: "Dean's List",
        type: "Awards",
        date: "12/18/21",
        description: "test text"
    }

    const accomplishment_list = [sample_accomplishment, sample_accomplishment, sample_accomplishment, sample_accomplishment, sample_accomplishment, sample_accomplishment ]

    return (
        <>
        <NavBar />
        <Container className="list">
            <Row>
                <Col>
                    <Button>Types</Button>
                </Col>
                <Col>
                    <Button>Sort By</Button>
                </Col>
                <Col>
                    <Button>Add New</Button>
                </Col>
            </Row>
            <Row xs={1} md={4} className="g-4">
               {
                   accomplishment_list.map((accomplishment, index) =>(
                    <Col>
                        <Accomplishment title={accomplishment["title"]} type={accomplishment["type"]} date={accomplishment["date"]} description={accomplishment["description"]} />
                    </Col>
                   ))
               }
            </Row>
        </Container>
        </>
    );
}

export default List;
