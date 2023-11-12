import {React} from "react"
import {Card, Button} from "react-bootstrap";

function Workout(props){

    return <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
        <br />
        <p>{props.name} ({props.difficulty})</p>
        <p>Muscle group: {props.muscle}</p>
        <p>{props.instructions}</p>
    </Card>
}

export default Workout