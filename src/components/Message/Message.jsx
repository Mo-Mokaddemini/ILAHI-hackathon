import React, { Component } from 'react';
import pyramid3 from '../../assets/pyramid3.jpg';
import './Message.css';
import lifecross from '../../assets/lifecross.png';
import { Link } from 'react-router-dom';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
          textarea: "",
        };
      }
    
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      submitTextarea = (e) => {
        e.preventDefault();
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        };
        const url = "";
        fetch(url, config)
          .then((res) => res.json())
          .then((res) => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`Message #${res} has been successfully added!`);
            }
          })
          .catch((e) => {
            console.error(e);
            alert("There was an error when adding the message.");
          });
      };
    

    render() {
        return (
            <div className='message'>
                <img className='bg-image' src={pyramid3} alt='' />
                <Link className="backtohome" to="/"> <img className="lifecross" src={lifecross}></img></Link>
                <h1>PRAYERS</h1>
                <form className='form' onSubmit={this.submitTextarea}>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Choose your divinity</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Amon</option>
                        <option>Anubis</option>
                        <option>Apis</option>
                        <option>Aton</option>
                        <option>Bastet</option>
                        <option>Hathor</option>
                        <option>Horus</option>
                        <option>Isis</option>
                        <option>Osiris</option>
                        <option>Ptah</option>
                        <option>Ré</option>
                        <option>Thot</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Leave your message</label>
                        <textarea className="form-control" id="textarea" 
                        name="textarea" rows="6"></textarea>
                    </div>
                    <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Message
