import React from 'react'
import { Link } from 'react-router-dom';
// import About from './About';
const Navbar = (props) => {
  return (
    <> 
     <h1 className='text-center'>Welcome to <b>Textrovert's</b> World</h1> 
   <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div  className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'?"success":"light bg-dark"}`} to="/">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-togg le="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={`nav-item text-white}`}>
          <Link className={`nav-link active text-${props.mode==='light'?"success":"light bg-dark"}`}aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item"> 
          <Link className={`nav-link active text-${props.mode==='light'?"success":"light bg-dark"}`} to="/about">About</Link>  
        </li>
        <li className="nav-item"> 
          <Link className={`nav-link active text-${props.mode==='light'?"success":"light bg-dark"}`} to='/'>Contact</Link>
        </li> */}
      </ul> 
      <div className="form-check form-switch" style={{color:props.mode==="dark"?"white":"black"}}>
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" > {`${props.mode==="light"?"Enable":"Disable"}`} Dark Mode</label>
</div>
    
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar
