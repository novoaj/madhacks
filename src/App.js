import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const url = "/time";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res=> {
        console.log(res);
        return res.json()
      })
      .then(data=> {
        setCurrentTime(data.time);
        console.log(data)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
