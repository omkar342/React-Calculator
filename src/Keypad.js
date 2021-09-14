import React , {useState} from 'react'
import "./Keypad.css"

function Keypad(props) {

    const handleClick = (event) =>{
        props.changeMyInput(prevResult => prevResult + event.target.name)
      }

    const clear = () =>{
        props.changeMyInput("");
      }
    
      const backspace = () =>{
        props.changeMyInput(prevResult => prevResult.slice(0,prevResult.length - 1));
      }

    //   const handleSubmit = () =>{
    //     props.changeMyInput(prevResult => eval(prevResult).toString());
    //   }

    //   componentDidCatch(error, info) ;{
    //     // Display fallback UI
    //     // this.setState({ hasError: true });
    //     // You can also log the error to an error reporting service
    //     console.log(error, info);
    //   }
    
      const handleSubmit = () =>{
        try {
            props.changeMyInput(prevResult => eval(prevResult).toString());
        }
        catch (err){
            console.log(err);
            props.changeMyInput("Error : Invalid Input")
        }
        // if (prevResult => eval(prevResult).toString())
        // props.handleMySubmit(prevResult => eval(prevResult).toString())
      }

    return (
    <div className="keypad">
       <button className="clear" onClick={clear}>Clear</button>
       <button className="backspace" onClick={backspace} >C</button>
       <button name="/" className="orange" onClick={handleClick}>&divide;</button>
       <button name="7" onClick={handleClick}>7</button>
       <button name="8" onClick={handleClick}>8</button>
       <button name="9" onClick={handleClick}>9</button>
       <button name="*" className="orange" onClick={handleClick}>&times;</button>
       <button name="4" onClick={handleClick}>4</button>
       <button name="5" onClick={handleClick}>5</button>
       <button name="6" onClick={handleClick}>6</button>
       <button name="-" className="orange" onClick={handleClick}>&minus;</button>
       <button name="1" onClick={handleClick}>1</button>
       <button name="2" onClick={handleClick}>2</button>
       <button name="3" onClick={handleClick}>3</button>
       <button name="+" className="orange" onClick={handleClick}>&#43;</button>
       <button name="0" onClick={handleClick}>0</button>
       <button name="." onClick={handleClick}>.</button>
       <button className="equals orange" onClick={handleSubmit}>=</button>
     </div>
    )
}

export default Keypad;
