import React, { Component } from "react";

export default class SocialLink extends Component{
    render(){
        return(
            <a href={this.props.href}>
                <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
                <p>{this.props.socialName}</p>
            </a>
        )
    }
}