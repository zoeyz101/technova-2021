import React from "react";
import NavBar from "../Components/NavBar";
import Accomplishment from "../Components/Accomplishment"
import { Container, Row, Col, Button } from 'react-bootstrap';
import Select from 'react-select'
//npm i --save react-select
import "./list.scss";

const multiSelect = 
    {
      id: "types",
      placeholder: "Select Types...",
      isMulti: true,
      options: [
        { value: "All", label: "All" },
        { value: "Award", label: "Award" },
        { value: "Personal Life", label: "Personal Life" },
        { value: "Volunteer", label: "Volunteer" },
        { value: "Work/Education", label: "Work/Education" },
      ],
    };

const sortSelect = 
    {
      id: "sort by",
      placeholder: "Sort By...",
      options: [
        { value: "Type", label: "Type" },
        { value: "Date", label: "Date" },
      ],
    };

const List = () =>{
    const sample_accomplishment = {
        title: "Dean's List",
        type: "AWARDS",
        date: "12/18/21",
        description: "test text"
    }

    const accomplishment_list = [sample_accomplishment, sample_accomplishment, sample_accomplishment, sample_accomplishment, sample_accomplishment, sample_accomplishment ]

    const selectedAccomplishments = (selected) => {
        let value = Array.from(selected.target.selectedOptions, option => option.value);
        }

    return (
        <body className="list-page">
        <NavBar />
        <Container className="list">
            <Row className="dropdowns">
                <Col sm={4}>
                    <Select 
                        isMulti={multiSelect.isMulti} 
                        options={multiSelect.options}
                        placeholder={multiSelect.placeholder}
                        handleChange = {selectedAccomplishments}
                    />
                </Col>
                <Col sm={4}>
                    <Select
                        options={sortSelect.options}
                        placeholder={sortSelect.placeholder}
                        handleChange={(value) => {
                            this.setState({ value: value.value });
                            }}
                    />
                </Col>
                <Col sm={4} >
                    <Button id="addNew">+ Add New</Button>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={4} className="g-4" id="cards">
               {
                   accomplishment_list.map((accomplishment, index) =>(
                    <Col>
                        <Accomplishment title={accomplishment["title"]} type={accomplishment["type"]} date={accomplishment["date"]} description={accomplishment["description"]} />
                    </Col>
                   ))
               }
            </Row>
        </Container>
        </body>
    );
}

export default List;
