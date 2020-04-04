import React, { Component } from "react";
import Linkedin from './../img/linkedin.svg';
import Instagram from './../img/instagram.svg';
import GitHub from './../img/github-square.svg';
import Codepen from './../img/codepen.svg';
import Youtube from './../img/youtube-square.svg';

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


// https://www.linkedin.com/in/adrien-desart
// https://www.instagram.com/desartadrien
// https://github.com/adriendesart
// https://codepen.io/adriendesart/
// https://www.youtube.com/channel/UCSI-b9dcEVarKndRCbtBg9w