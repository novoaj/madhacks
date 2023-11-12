import {React} from 'react';
import './App.css'; // Import your CSS file
import Navbar from './components/navbar';
import Content from "./components/Content";


function App() {
  return (
    <div>
      <Navbar />
      <Content></Content>
      </div>
    
  )
}

export default App;







/*
const styles = {
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
  }
};

const App = () => {
  const buttonNames = ['Upper Body', 'Lower Body', 'Cardio'];

  const title = () => {
    return (
      <nav>
        <img></img>
        <h2 id="Home">Home</h2>

        <div class="navItems">
          <btn id="Programs">Programs</btn>
          <btn id="Build">Build</btn>
          <btn id="Community">Community</btn>
        </div>

        <btn id="Login">Log in</btn>
        
        <div class="container">
          <btn id="SignUp">Sign Up</btn>
        </div>
      </nav>
    );
  };

  

  return (
    <div>
      {title()}
    </div>
  );
};

export default App; */

/*function App() {
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

export default App; */
