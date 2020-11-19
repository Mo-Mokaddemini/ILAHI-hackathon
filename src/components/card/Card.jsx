import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name, godOf, image, message, culte, gift} = this.props;
        return(
            <div className="container-card">
                <div className="imageGod">
                    <img src={image} alt={name}/>
                </div>
                <div className="container-content">
                    <div className="nameGod">
                        <h1>{name}</h1>
                        <img className="lign" src="https://zupimages.net/up/20/47/7zns.png" alt="lign"/>
                    </div>
                    <div>
                        {godOf}
                    </div>
                    <div className="citation">
                        <p className="title">Citation :</p>
                        <br/> 
                        <q>{message}</q>
                    </div>
                    <div className="placeOfWorship">
                        <p><span className="title">Place of cult : </span>{culte}</p>
                    </div>
                    <div className="gift">
                        <p><span className="title">Gift : </span>{gift}</p>  
                    </div>
                </div>
            </div>
        )
    }

}
