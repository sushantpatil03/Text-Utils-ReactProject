import React from "react";
import { Link } from "react-router-dom";
import ColorThemes from "./ColorThemes";

export default function Navbar(props) {

    const handleTheme = (color) =>{
      // props.colorMode2(color)
      console.log(color)
    }
      return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
          </div>
          {/* <div style={{color : props.mode==='light'?'black':'white'}}>
            Set Color theme
          </div> */}
          
          {/* <div className="btn-group mx-3" role="group" aria-label="Basic mixed styles example">
            <button type="button" onClick={handleTheme("danger")} className="btn btn-danger px-4 py-3"></button>
            <button type="button" onClick={handleTheme("primary")} className="btn btn-primary px-4 py-3"></button>
            <button type="button" onClick={handleTheme("success")} className="btn btn-success px-4 py-3"></button>
          </div> */}

          {/* <ColorThemes/> */}
          
          <div className={`form-check form-switch ${props.mode==='dark' ? 'text-light' : 'text-dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
        </nav>
      );
  
    
}

