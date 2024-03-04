import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {

  const [text1, setText1]=useState("");
  const [text2, setText2]=useState("");
  const [testResult, setTestResult]=useState(true);
  
  const inputText1 =(event)=>{
    setText1(event.target.value);
    }
  
  const inputText2 =(event)=>{
    setText2(event.target.value);
    }
  
  
  return ( 
    
  <div>
  <h3>Text1</h3>
  <input type='text' onChange={inputText1}></input>
  <h3>Text2</h3>
  <input type='text' onChange={inputText2}></input>
  <p>
  <button onClick={()=>{text1===text2?setTestResult(true):setTestResult(false)}}><>Match Test</></button>
  </p>
  {testResult? <h2>Match</h2>: <h2>Not Match</h2>}
  </div>
  
        );
}

export default App;
