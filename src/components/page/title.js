import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Title extends Component{
    render(){
        let styles ={
            title :{
                width : "100%",
                textAlign : "center",
                fontSize : this.props.deviceType==="Mobile"?"2rem":"4rem",
                backgroundColor :"white",
                opacity : "0.75",
                margin : "0",
            },
        }
        return(
            <h1 style={styles.title}>{this.props.language==="fr"?this.props.title.fr:this.props.title.en}</h1>
        )
    }
}

Title.propTypes ={
    language : PropTypes.string,
    deviceType : PropTypes.string,
    title : PropTypes.object,
}