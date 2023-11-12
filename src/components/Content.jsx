import React, {useState, useEffect} from "react";
import {Form, Button, Dropdown, Col, Row, Container} from "react-bootstrap"
import DropdownForm from "./DropdownForm"
import Workout from "./Workout"

function Content(props){
    const [type, setType] = useState("strength");
    const [muscle, setMuscle] = useState("biceps");
    const [difficulty, setDifficulty] = useState("beginner");
    const [workouts, setWorkouts] = useState([]);
    // fetch api stuff from backend
    const fetchData = async () => {
        fetch(`/get-exercises?type=${type}&difficulty=${difficulty}`, {
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
    }
    // useEffect(() =>{
    //     fetch("/get-exercises", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       }
    //     })
    //       .then(res => res.json())
    //       .then(data=> {
    //         console.log(data) // set workouts
    //         setWorkouts(data)
    //       })
    //   } , [])

    useEffect(() => {
        fetchData();
    }, [muscle, type, difficulty])
    
    function handleClick(){
        fetchData();
    }

    const handleDropdownChange = (type_value) => {
        setType(type_value)
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
                        <DropdownForm onDropdownChange = {handleDropdownChange}/>
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