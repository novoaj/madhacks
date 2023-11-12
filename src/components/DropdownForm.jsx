import React, {useState} from "react";
import {Form} from "react-bootstrap";


function DropdownForm(props){
    const options = ["Strength", "Cardio"]
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (e) => {
        setSelected(e.target.value);
        props.onDropdownChange(e.target.value);
    }
    return (
        <Form>
            <select 
                value={selected}
                onChange={handleChange}>
                {options.map((option, index) => 
                <option key={index} value={option}>
                    {option}
                </option>
                )}
            </select>
        </Form>
    )
}

export default DropdownForm