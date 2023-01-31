import React from 'react'
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <>
    <div className="container">
        <h2 className="my-2" style={{color : props.mode==='light'?'black':'white'}}>About Us </h2>
        <div className="card" style={{width: 75 + 'rem'}}>
        {/* <img src="gaming.jpg" className="card-img-top" alt="..."/> */}
        <div className="card-body" style={{backgroundColor : props.mode==="dark"?"#413f3f":"white", color : props.mode==="dark"?"white":"black"}}>
        <p className="card-text">This beautiful revolutionary powerful software Textutils is developed and managed by Sushant from GP Jalgaon . </p>
        <Link to="/"><button type='button' className={`btn btn-${props.mode==='light'?'primary':'dark'} mr-3`}>Go to the Home</button></Link>
        </div>
    </div>
    </div>
    </>
  );
}
// ./ColorThemes