import {Component} from 'react';
import './Homepage.css';
import landscape from '../../assets/pyramid2.png';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
      <div className="Homepage">
        <img className="backgroundimg" src={landscape} alt="background"></img>
        <div className="homepageContainer">
          <h1 className="title">ILAHI</h1>
          <Link className="buttonjoin" to="/FunctionCard"> 
           Join Us
          </Link>
        </div>
      </div>
    );
  }
  
  export default Homepage;
  