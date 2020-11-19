import './Homepage.css'
import landscape from '../../assets/pyramid2.png'

function Homepage() {
    return (
      <div className="Homepage">
        <img className="backgroundimg" src={landscape} alt="background"></img>
        <div className="homepageContainer">
          <h1 className="title">ILAHI</h1>
          <h2 className="buttonjoin">Join Us</h2>
        </div>
      </div>
    );
  }
  
  export default Homepage;
  