import React,{useState} from 'react'

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';  
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() { 
 const [mode,setMode]=useState("light")//whether dark mode is enabled or not c
 const [alert,setAlert]=useState(null);
 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })  
  setTimeout(() => {
    setAlert(null);
  }, 1500);
 }  
 
 const toggleMode=()=>{
  if(mode==="dark"){
      setMode("light") 
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }else{
      setMode("dark")
      document.body.style.backgroundColor="#042743"; 
      showAlert("Dark mode has been enabled","success");
  }
 }
  return (
   <>   
     <Router>
  <Navbar 
  tittle="YOGI" 
  mode={mode} 
  toggleMode={toggleMode}
  />  
  <Alert  
  alert={alert} 
  />
   <div className="container">  

 <Routes>
  {/* <Route exact path='/about' element={<About 
  mode={mode}
  />}/> */}
  <Route exact path='/'element={<TextForm   
 heading="Try Textroverts world - Word Counter, Character Counter,Remove extra spaces" 
   mode={mode} 
   showAlert={showAlert}
  />}/>
</Routes>

   </div>   
   </Router>
   </> 

  );
}

export default App;
