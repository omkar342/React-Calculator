import React , {useState} from 'react';
import Footer from './Footer';
import Keypad from './Keypad';
import './App.css';

function App() {

  const [result , setResult] = useState("");

  const handleInputChange = (event) => {
    setResult(event.target.value);
  }

  const changeInput = (clickedButton) => {
    setResult(clickedButton);
  }

  return (
    <div>
      <div className="container">
     <form action="">
        <input onChange={handleInputChange} value={result || 0} type="text" />
     </form> 
     <Keypad changeMyInput={changeInput} />
    </div>
    <Footer/>
    </div>
  );
}

export default App;
