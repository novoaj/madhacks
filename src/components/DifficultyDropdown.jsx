import React, {useState} from "react";
import {Form} from "react-bootstrap";

function Dropdown(props) {
    const options = ["Beginner", "Intermediate", "Expert", "Any"]
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (e) => {
        setSelected(e.target.value);
        props.onDifficultyChange(e.target.value);
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

export default Dropdown;