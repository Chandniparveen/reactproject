import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const data={name:"",email:"",password:""};
  const [inputData, setInputData]=useState(data)
  const[flag,setFlag]=useState(false)
  useEffect(()=>{
    console.log("Registered")
  },[flag])
  function handleData(e){
    setInputData({...inputData, [e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    if (!inputData.name||!inputData.email||!inputData.password){
      alert("All Fields are mandatory")
    }
    else{
      setFlag(true)
    }
  }
  return (
    <>
    <pre>{(flag)?<h2 id="rr">Hello {inputData.name},You have registered successfully</h2>:""}</pre>
    <form className="container" onSubmit={handleSubmit} id="form">
      <header className="App-header">
        <h1>Registration Form</h1>
      </header>
      <div>
        <input type="text" placeholder="Enter Your Name" name="name" value={inputData.name} onChange={handleData}></input>
      </div>

      <div>
        <input type="text" placeholder="Enter Your Email" name="email" value={inputData.email} onChange={handleData}></input>
      </div>

      <div>
        <input type="password" placeholder="Enter Your Password" name="password" value={inputData.password} onChange={handleData}></input>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
    
  );
}

export default App;
