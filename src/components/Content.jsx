import React, {useState, useEffect} from "react";
import {Form, Button, Dropdown, Col, Row, Container} from "react-bootstrap"
import DropdownForm from "./DropdownForm"
import Workout from "./Workout"
import DifficultyDropdown from "./DifficultyDropdown";

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
        setType(type_value);
    }
    const handleDifficultyChange = (difficulty_value) => {
        setDifficulty(difficulty_value);
    }
    
    return (
        <Container fluid>
            <Row className="pt-5">
                <Col>
                    <div className="align-items-center">
                        <Form.Group className="m-3" controlId = "my-form">
                            <Form.Label>
                                Type of workout:
                            </Form.Label>
                            <DropdownForm onDropdownChange = {handleDropdownChange}/>
                            <Form.Label>
                                Difficulty
                            </Form.Label>
                            <DifficultyDropdown onDifficultyChange = {handleDifficultyChange}/>
                        </Form.Group>
                    </div>
                    {/* <Button onClick={handleClick}>
                            Generate Workout
                    </Button> */}
                </Col>   
            </Row>
            <br/>
            <hr/>
            <Row>
            {workouts.length === 0 ? 
                <>
                    No results!
                </> : 
                <>
                    {workouts.map((workout, index) => (
                    <Col xs = {12} s = {6} md = {4} lg = {3} xl = {2} key={index} >
                        <Workout key={index} {...workout}/>
                    </Col>
                    ))}
                </>
            }
            
            </Row>
        </Container>
        
    )
}

export default Content;