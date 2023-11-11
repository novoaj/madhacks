import React, { useState, useEffect} from 'react';
import './styles.css'; // Import the CSS file

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Workout 1', 'Workout 2', 'Workout 3'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect( () => {
    // make fetch request to /get-exercises
    const url = "/get-exercises"
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200){
          return res.json()
        }else{
          console.log(res)
        }
      }
      )
      .then(data => {
          // update some state variable that will hold out excersizes
          console.log(data)
      })
  }
  , [])
  return (
    <div className="dropdown-container"> {/* Apply styles from styles.css */}
      <h2>WorkoutAThon: {selectedOption}</h2>
      <select className="dropdown" onChange={(e) => handleOptionSelect(e.target.value)}>
        <option value="" disabled selected>
          Select an Workout
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;

