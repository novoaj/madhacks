import React, {useState, useEffect} from "react";
import {Form, Button, Dropdown, Col, Row, Container} from "react-bootstrap"
import DropdownForm from "./DropdownForm"
import Workout from "./Workout"

function Content(props){
    const [workoutType, setWorkoutType] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    // fetch api stuff from backend
    useEffect(() =>{
        fetch("/get-exercises", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
          .then(res => res.json())
          .then(data=> {
            console.log(data) // set workouts
            setWorkouts(data)
          })
      } , [])

    function handleClick(){
        
    }
    
    return (
        <>
        <Container fluid>
            <Row>
                <Form className="align-items-center">
                    <Form.Group className="mb-3" controlId = "my-form">
                        <Form.Label>
                            Type of workout:
                        </Form.Label>
                        <DropdownForm/>
                    </Form.Group>
                </Form>
                <Button onClick={handleClick}>
                        Generate Workout
                </Button>
                
            </Row>
            <br/>
            <hr/>
            <Row>
            {workouts.map((workout, index) => (
                <Col xs = {12} s = {6} md = {4} lg = {3} xl = {2} key={index} >
                    <Workout key={index} {...workout}/>
                </Col>
                
            ))}
            </Row>
        </Container>
        </>
        
    )
}

export default Content;