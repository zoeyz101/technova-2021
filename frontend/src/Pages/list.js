import React, {useState} from "react";
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
      options: [
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
        type: "Award",
        date: '2020-09-15',
        description: "test text"
    }
    const sample_accomplishment2 = {
        title: "Dean's List",
        type: "Personal Life",
        date: '2019-09-15',
        description: "test text"
    }
    const originalList = [sample_accomplishment, sample_accomplishment2, sample_accomplishment, sample_accomplishment2, sample_accomplishment, sample_accomplishment]

    const [accomplishment_list, setList] = useState(originalList)
    const selectedAccomplishments = (selected) => {
        let newSelect = []
        selected.forEach(
            option => {
                newSelect.push(option.label);
              })
        if (newSelect.length===0){
            setList(originalList)
        }else{
            setList(originalList.filter((accomplishment =>{
                return newSelect.includes(accomplishment.type)
            })))
        }
    }
    
    const sortAccomplishments = (selected) => {
        const sort = selected.label
        let sortedList = accomplishment_list;
        if (sort === "Type"){
            sortedList = sortedList.sort((a, b) =>{
                const typeA = a.type
                const typeB = b.type
                if (typeA < typeB) {
                  return -1;
                } else if (typeA > typeB) {
                  return 1;
                }
                // equal types
                return 0;
            })
            console.log("sort by type:", sortedList)
        }else if (sort === "Date"){
            sortedList = sortedList.sort((a, b) =>{
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateB - dateA
            })
            console.log("sort by date:", sortedList)
        }
        setList(sortedList)
        console.log (accomplishment_list)
    }

    return (
        <body className="list-page">
        <NavBar />
        <Container className="list">
            <Row className="dropdowns">
                <Col sm={4}>
                    <Select 
                        isMulti
                        options={multiSelect.options}
                        placeholder={multiSelect.placeholder}
                        onChange = {selectedAccomplishments}
                    />
                </Col>
                <Col sm={4}>
                    <Select
                        options={sortSelect.options}
                        placeholder={sortSelect.placeholder}
                        onChange={sortAccomplishments}
                    />
                </Col>
                <Col sm={4} >
                    <Button id="addNew">+ Add New</Button>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={4} className="g-4" id="cards">
               {
                   accomplishment_list.map((accomplishment) =>(
                    <Col>
                        <Accomplishment title={accomplishment["title"]} type={accomplishment["type"]} date={accomplishment["date"]} description={accomplishment["description"]}/>
                    </Col>
                   ))
               }
            </Row>
        </Container>
        </body>
    );
}

export default List;
