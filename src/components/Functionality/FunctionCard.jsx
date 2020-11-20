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
          <Link className = 'devinity' to="/divinity"><p className="divs-text">Divinities</p></Link>
          <Link className = 'prayer' to="/prayer"> <p className="divs-text">Prayer </p></Link>
        
        </div>
      </div>
    );
  }
}

export default FunctionCard;
