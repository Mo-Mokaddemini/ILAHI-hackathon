import React, { Component } from 'react';
import axios from 'axios';
import './God.css';
import Card from './Card';
import Loader from 'react-loader-spinner';


export default class God extends Component {
    constructor(props){
        super(props);
        this.state = {
            god: null,
        }
        this.getGod = this.getGod.bind(this);
    }

    componentDidMount() {
        this.getGod();
    }

    getGod(){
        axios
        .get('https://divinities-hackaton1.herokuapp.com/divinities')
        .then(res => res.data)
        .then(data =>{
            this.setState({god: data.filter(item => item.name === this.props.nameGod)});
            console.log(this.state.god)
        })
        .catch(err => {
            console.error(err);
        })
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.god ? (
                        <div className='div-flex'>
                            {this.state.god 
                            .map(item =>
                                <Card 
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    godOf={item.godOf}
                                    message={item.message}
                                    gift={item.gift}
                                    culte={item.culte}
                                />                                
                            )}    
                        </div>
                    ) : 
                    <div className="loading">
                        <span>
                            <Loader
                                type="Oval"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={10000} //3 secs
                            />
                        </span>
                        <p>Loading</p>
                    </div>
                    }
                </div>
            </div>
        )
    }
}