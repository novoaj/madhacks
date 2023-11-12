import {React} from "react"
import {Card, Button} from "react-bootstrap";


function Workout(props){

    return <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
        <Card.Img variant="top" src=""/>
        <Card.Body>
            <Card.Title>
                {props.name}
            </Card.Title>
            <Card.Subtitle>
                Muscle group: {props.muscle}
            </Card.Subtitle>
            <Card.Text>
                {props.instructions}
            </Card.Text>
        </Card.Body>

    </Card>
}

export default Workout