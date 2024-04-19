
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from './components/About';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light');// Wheter dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
     
      setAlert(null);
     
    },1500);

    
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    {/* <Router> */}
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
      {/* <Route path="/about" exact element={<About/>} /> */}
      {/* <Route path="/" exact element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} /> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* </Routes> */}
      </div>
    {/* </Router> */}

   
    </>
  );
}

export default App;
 