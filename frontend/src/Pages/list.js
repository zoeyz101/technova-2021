import React, {useState} from "react";
import NavBar from "../Components/NavBar";
import Accomplishment from "../Components/Accomplishment"
import { Container, Row, Col, Button, Modal, Form, InputGroup} from 'react-bootstrap';
import Select from 'react-select'
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
    const [showAdd, setAddShow] = useState(false);
    const handleAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
        let newList = fullList
        newList.push({
            title: "Made a new friend",
            type: "Personal Life",
            date: '2019-09-15',
            description: "they were very nice!"
        })
        setAddShow(false)
        setList([...newList])
        setFullList([...newList])
        console.log("list set!")
    }
    const [fullList, setFullList] = useState(originalList)
    const [currList, setList] = useState(originalList)
    const selectedAccomplishments = (selected) => {
        let newSelect = []
        selected.forEach(
            option => {
                newSelect.push(option.label);
              })
        if (newSelect.length===0){
            setList(fullList)
        }else{
            setList(fullList.filter((accomplishment =>{
                return newSelect.includes(accomplishment.type)
            })))
        }
    }

    const sortAccomplishments = (selected) => {
        const sort = selected.label
        let sortedList = currList;
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
        }else if (sort === "Date"){
            sortedList = sortedList.sort((a, b) =>{
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateB - dateA
            })
        }
        setList([...sortedList])
        console.log (currList)
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
                    <Button id="addNew" onClick = {handleAddShow}>+ Add New</Button>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={4} className="g-4" id="cards">
               {
                   currList.map((accomplishment) =>(
                    <Col>
                        <Accomplishment title={accomplishment["title"]} type={accomplishment["type"]} date={accomplishment["date"]} description={accomplishment["description"]}/>
                    </Col>
                   ))
               }
            </Row>
            <Modal centered show={showAdd} onHide={handleAddClose}>
                <Modal.Body className = "addNewModal" >
                    <Modal.Title className="addHeading">YOUR NEW ACCOMPLISHMENT</Modal.Title>
                    <Form className = "form" validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicTitle" alt="Accomplishment Title" >
                        <InputGroup hasValidation>
                            <Form.Control required type="name" placeholder="Accomplishment Title" />
                        </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate" alt="Date">
                        <InputGroup hasValidation>
                            <Form.Control required type="name" placeholder="MM / DD / YYYY" />
                        </InputGroup>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formSelectType">
                        <Form.Control
                        as="select">
                        <option value="" disabled selected>Type of Accomplishment</option>
                            <option value="Award">Award</option>
                            <option value="Personal">Personal Life</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Work/Education">Work/Education</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDesc" alt="Description">
                        <InputGroup hasValidation>
                            <Form.Control required type = "string" as = "textarea" rows= {4} placeholder="Description..." />
                        </InputGroup>
                        </Form.Group>

                        <Button variant="primary" 
                            className="button" 
                            type="submit" 
                            alt="Add New Button"
                            onClick={handleSubmit}>
                            +ADD
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
        </body>
    );
}

const sample_accomplishment = {
    title: "Dean's List",
    type: "Award",
    date: '2020-09-15',
    description: "I made the Dean's List!"
}
const sample_accomplishment2 = {
    title: "Trevor Project",
    type: "Volunteer",
    date: '2019-09-15',
    description: "I volunteered at the Trevor Project and got to talk to a bunch of kids who are LGBTQ+! It was so cool to meet more people in my community!"
}
const sample_accomplishment3 = {
    title: "EngSoc AdComm S21",
    type: "Work/Education",
    date: '2021-05-15',
    description: "I got the EngSoc commissionership I've been wanting for a year!"
}
const originalList = [sample_accomplishment, sample_accomplishment2, sample_accomplishment, sample_accomplishment3, sample_accomplishment2, sample_accomplishment]

export default List;
