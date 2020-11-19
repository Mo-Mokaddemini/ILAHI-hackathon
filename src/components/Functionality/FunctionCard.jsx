import React, { Component } from "react";
import {Link} from 'react-router-dom'; 
import './FunctionCard.css';



class FunctionCard extends Component {
  render() {
    return (
      <div>
        <div className="bg-image"> </div>
        <div className = 'fonctionality'>
          
          <Link className = 'devinity' to="/devinity">Devinity</Link>
          <Link className = 'prayer' to="/prayer"> prayer </Link>
        
        </div>
      </div>
    );
  }
}

export default FunctionCard;
