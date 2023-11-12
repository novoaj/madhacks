import {React} from "react"
import {Card, Button} from "react-bootstrap";


function Workout(props){
    const style = {
        margin: "0.5rem", 
        padding: "0.5rem",
        height: "200px",
        overflow: "auto",
        boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.1)"
    }

    return <Card style={style} className="p-3">
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