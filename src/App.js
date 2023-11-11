import React, { useState } from 'react';
//import { StyleSheet } from "react-native";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Workout 1', 'Workout 2', 'Workout 3'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Welcome to WorkoutAThon: {selectedOption}</h2>
      <select onChange={(e) => handleOptionSelect(e.target.value)}>
        <option value="" disabled selected>
          Select a Workout 
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