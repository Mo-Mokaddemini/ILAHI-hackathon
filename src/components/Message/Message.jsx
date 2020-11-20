import React, { Component } from 'react';
import pyramid3 from '../../assets/black-stone-bg.jpg';
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
    
      onChange = (res) => {
        this.setState({
          [res.target.name]: res.target.value
        });
      };
    
      submitTextarea = (res) => {
        res.preventDefault();
        this.setState({textarea: res.target.value})
       

            if (this.state.textarea == "") {
             
              let result = document.querySelector('.answer')
              let answer = document.createElement("h2")
              document.querySelector('h2')
              answer.innerHTML= "Please fill out the form";
              result.appendChild(answer);
             
              function answerremove() {
                answer.remove();
                }
                setTimeout(answerremove, 3000);

            } else  {
              let result = document.querySelector('.answer')
              let answer = document.createElement("h2")
              document.querySelector('h2')
              answer.innerHTML= ("Your message  has been successfully added!");
              result.appendChild(answer);
              this.setState({textarea : ""})

              function answerremove() {
                answer.remove();
                }
                setTimeout(answerremove, 3000); 
            }
          }
       
  render() {
      return (
        <div className="mescontainer">
          <Link className="backtohome" to="/"> <img className="lifecross" src={lifecross}></img></Link>
            <div className='message'>
                <img className='bg-image' src={pyramid3} alt='' />
                <h1 className="prayers">PRAYERS</h1>
                <form className='form' onSubmit={this.submitTextarea}>
                    <div className="form-group">
                        <label className="leavemsg" for="exampleFormControlSelect1">Choose your divinity</label>
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
                        <label className="leavemsg" for="exampleFormControlTextarea1">Leave your message</label>
                        <textarea className="form-control" id="textarea" 
                        name="textarea" rows="6" placeholder="Enter your prayer here"></textarea>
                    </div>
                    <div class="col-auto">
                            <button type="submit"className="btn" class="btn btn-primary mb-2">Submit</button>
                           
                    </div>
                </form>
                <div className="answer"></div>
            </div>
          </div>
        )
    }
}
export default Message
