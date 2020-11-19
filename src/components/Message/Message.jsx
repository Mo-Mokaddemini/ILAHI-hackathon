import React from 'react';
import './Message.css';

function Message() {
    return (
        <div className='message'>
            <h1>Message</h1>
            <form className='form'>
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
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Message
