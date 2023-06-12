import React from 'react';
import { Component } from "react";
import "./DestinationStyle.css";
class DestinationData extends Component{
    render() {
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2> {this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className="image1">
                <img alt="image1" src={this.props.img1}></img>
                <img alt="image1" src={this.props.img2}></img>
            </div>
        </div>   
        );
    }
}
export default DestinationData;