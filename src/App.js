import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import ColorThemes from "./Components/ColorThemes";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")

  const colorMode2 = (color)=>{
      if(color==="primary"){
        // console.log("Primary")
        // document.body.style.backgroundColor = 'blue';
      }
      if (color==="danger") {
        // console.log("danger")
        // document.body.style.backgroundColor = 'red';
      }
      if (color==="success") {
        // console.log("success")
        // document.body.style.backgroundColor = 'green';
      }
  }

  const toggleMode = ()=>{
    if(mode === "dark"){
      setmode("light")
      document.body.style.backgroundColor = 'white';
    }else{
      setmode("dark")
      document.body.style.backgroundColor = '#353333';
    }
  }
  return (
    <>
      <Router>
      <Navbar mode={mode} title="TextUtils By Sush" toggleMode={toggleMode} colorMode2={colorMode2} />
      <div className="container">
        {/* <ColorThemes/> */}
        {/* <TextForm title="Welcome To TextUtils" mode={mode} /> */}
        {/* <About mode={mode}/> */}
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextForm title="Welcome To TextUtils" mode={mode} />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
