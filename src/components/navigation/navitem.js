import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {isVisible} from '../../utils/displayed';

export default class NavItem extends Component{
    state = {
        visible : false,
        over : false,
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = () =>{
        if(this.props.navPoint){
            this.setState({
                visible: isVisible(this.props.navPoint) !== "unvisible"?true:false,
            })
        }
    }
    handleOver =()=>{
        this.setState({
            over: !this.state.over,
        })
    }
    render(){
        //css :
        let styles = {
            navItem : {
                position : "relative",
                left: "-100%",
            },
            navLink : {
                display : "flex",
                flexFlow: "row nowrap",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "1rem 0",
                backgroundColor: "black",
                borderRadius: "0 2.4rem 2.4rem 0",
                textDecoration: "none",
                color: "white",
                position: "relative",
                left: this.state.over?"100%":"2.6rem",
                transition: "ease-in-out 0.75s" ,
            },
            subject :{
                padding: "0.2rem 1rem",
                textAlign: "right",
            },
            icon :{
                width: "2rem",
                height: "2rem",
                padding: "0.2rem",
                border: this.props.deviceType !== "Mobile" && this.state.visible?"1px solid rgb(145, 231, 16)":"1px solid white",
                borderRadius: "50%",
            },
        }

        return(
            <div style={styles.navItem}>
                <a style={styles.navLink} href={this.props.anchor && "#" + this.props.anchor} onMouseEnter={this.handleOver} onMouseLeave={this.handleOver}>
                    <span style={styles.subject}>{this.props.language==="en"?this.props.name.en:this.props.name.fr}</span>
                    <img style={styles.icon} src={this.props.icon.src} alt={this.props.icon.alt}/>
                </a>
            </div>
        )
    }
}

NavItem.propTypes = {
    anchor : PropTypes.string,
    name : PropTypes.object,
    icon : PropTypes.object,
    language : PropTypes.string,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
}