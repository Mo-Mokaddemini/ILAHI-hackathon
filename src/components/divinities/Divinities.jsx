import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../slider/Slider';
import icons1 from '../../assets/amon.jpg';
import icons2 from '../../assets/anubis22.jpg';
import icons3 from '../../assets/apis.jpg';
import icons4 from '../../assets/aton.png';
import icons5 from '../../assets/bastet2.jpg';
import icons6 from '../../assets/hathor.jpg';
import icons7 from '../../assets/horus.jpg';
import icons8 from '../../assets/isis.jpg';
import icons9 from '../../assets/osiris3.jpg';
import icons10 from '../../assets/ptah.jpg';
import icons11 from '../../assets/ra.jpg';
import icons12 from '../../assets/thot.jpg';
import './Divinities.css';
import lifecross from '../../assets/lifecross.png';


export default function Divinities () {


return (
    <div className="divinities-home" >
<Link className="backtohome" to="/"> <img className="lifecross" src={lifecross}></img></Link>
    <Slider />
    <div className="divinity-container">
      
   <h1 className="discover-title">Discover Us</h1>
  
   <div className="grid-div">
       <Link className="links"to ="/amon">
            <div id="icon1">
                <p className="icon-name">Amon</p>
       
                     <img className="divinities-icons" src={icons1} />
           </div>
      </Link>
      <Link className="links"to="/Anubis">
             <div id="icon2">
                 <p className="icon-name">Anubis</p>
                     <img className="divinities-icons"  src={icons2} />
   
             </div>
     </Link>
     <Link className="links"to="/apis">
   <div id="icon3">
   <p className="icon-name">Apis</p>
   <img className="divinities-icons"  src={icons3} />
   </div>
   </Link>
   <Link className="links"to="/aton">
   <div id="icon4">
   <p className="icon-name">Aton</p>
   <img className="divinities-icons"  src={icons4} />
   </div>
   </Link>
   <Link className="links"to="/bastet">
   <div id="icon5">
   <p className="icon-name">Bastet</p>
   <img className="divinities-icons"  src={icons5} />
   </div>
   </Link>
   <Link className="links"to="/hathor">
  
   <div id="icon6">
   <p className="icon-name">Hathor</p>
   <img className="divinities-icons"  src={icons6} />
   </div>
  
   </Link>
   <Link className="links"to="/horus">
   <div id="icon7">
   <p className="icon-name">Horus</p>
   <img className="divinities-icons"  src={icons7} />
   </div>
   </Link>
   <Link className="links"to="/isis">
   <div id="icon8">
   <p className="icon-name">Isis</p>
   <img className="divinities-icons"  src={icons8} />
   </div>
   </Link>
   <Link className="links"to="/osiris">
   <div id="icon9">
   <p className="icon-name">Osiris</p>
   <img className="divinities-icons"  src={icons9} />
   </div>
   </Link>
   <Link className="links"to="/ptah">
   <div id="icon10">
   <p className="icon-name">Ptah</p>
   <img className="divinities-icons"  src={icons10} />
   </div>
   </Link>
   <Link className="links"to="/ra">
   <div id="icon11">
   <p className="icon-name">Ra</p>
   <img className="divinities-icons"  src={icons11} />
   </div>
   </Link>
   <Link className="links"to="/">
   <div id="icon12">
   <p className="icon-name">Thot</p>
   <img className="divinities-icons"  src={icons12} />
   </div>
   </Link>
   </div>
  
   </div>
   </div>


  
);



}