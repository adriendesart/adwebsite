import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class SocialLink extends Component{
    state ={
        over : false,
    }
    handleOver =()=>{
        this.setState({
            over: !this.state.over,
        })
    }
    render(){
        let styles ={
            socialBox:{
                height : "4rem",
                width : "4rem",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
            },
            link : {
                height : "2rem",
                width : "2rem",
                margin : "0",
                padding : "0",
                transform : this.state.over && "scale(1.5)",
                transition : "linear 0.3s",
            },
        }
        return(
            <div style={styles.socialBox} onMouseEnter={this.handleOver} onMouseLeave={this.handleOver}>
                <a href={this.props.href} style={styles.link}>
                    <img src={this.props.img.src} alt={this.props.img.alt}/>
                </a>
            </div>
        )
    }
}

SocialLink.propTypes ={
    href : PropTypes.string,
    img : PropTypes.object,
}


// import Linkedin from './../img/linkedin.svg';
// import Instagram from './../img/instagram.svg';
// import GitHub from './../img/github-square.svg';
// import Codepen from './../img/codepen.svg';
// import Youtube from './../img/youtube-square.svg';
// https://www.linkedin.com/in/adrien-desart
// https://www.instagram.com/desartadrien
// https://github.com/adriendesart
// https://codepen.io/adriendesart/
// https://www.youtube.com/channel/UCSI-b9dcEVarKndRCbtBg9w