import React, { Component } from "react";
import {Link} from 'react-router-dom'; 
import './FunctionCard.css';
import lifecross from '../../assets/lifecross.png';


class FunctionCard extends Component {
  render() {
    return (
      <div className="functioncardcontainer">
        <Link className="backtohome" to="/"> <img className="lifecross" src={lifecross}></img></Link>
        <div className="bg-image-2"> </div>
        <div className = 'fonctionality'>
          <Link className = 'devinity' to="/devinity">Divinity</Link>
          <Link className = 'prayer' to="/prayer"> Prayer </Link>
        
        </div>
      </div>
    );
  }
}

export default FunctionCard;
