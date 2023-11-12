import React, {useState} from "react";
import {Form} from "react-bootstrap";


function DropdownForm(props){
    const options = ["Strength", "Cardio", "Powerlifting", "Plyometrics", "Stretching"]
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (e) => {
        setSelected(e.target.value);
        props.onDropdownChange(e.target.value);
    }
    return (
        <Form>
            <Form.Select 
                value={selected}
                onChange={handleChange}>
                {options.map((option, index) => 
                <option key={index} value={option}>
                    {option}
                </option>
                )}
            </Form.Select>
        </Form>
    )
}

export default DropdownForm