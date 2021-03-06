import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

export default class SectionCard extends Component{
    state = {
        over : false,
        clicked : false,
    }
    handleOver =()=>{
        this.setState({
            over: !this.state.over,
        })
    }
    handleClick=()=>{
        this.setState({
            clicked : true,
        })
    }
    render(){
        //css :
        let styles = {
            card :{
                position : "relative",
                backgroundImage : `url(${this.props.background})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width : this.props.deviceType === "Mobile"?"33vh":"50vh",
                height: this.props.deviceType === "Mobile"?"33vh":"50vh",
                overflow : "hidden",
                border: "5px solid black",
                borderRadius : "50%",
                margin : '1rem 3rem',
                zIndex : "2",
            },
            movingSection :{
                position : "absolute",
                top : "100%",
                width : this.props.deviceType === "Mobile"?"33vh":"50vh",
                height: this.props.deviceType === "Mobile"?"33vh":"50vh",
                transition: "transform 2s",
                transform: this.state.over && "translateY(-100%)",
                opacity : "0.7",
                backgroundColor:"white",
                display: "flex",
                flexFlow:"column nowrap",
                justifyContent: "center",
                alignItems: "center",
            },
            title :{
                margin : "0",
                padding : "0",
                textDecoration:"underline",
            },
            description : {
                margin : "0",
                padding : "0",
                maxHeight : "50%",
                textAlign : "center",
            },
        }
        if(this.state.clicked){
            return <Redirect push to={`/${this.props.redirect}`}/>
        }
        return(
            <div style={styles.card} onMouseEnter={this.handleOver} onMouseLeave={this.handleOver} onClick={this.props.deviceType !=="Mobile"?this.handleClick:undefined}>
                <section style={styles.movingSection} onClick={this.props.deviceType ==="Mobile"?this.handleClick:undefined}>
                    <h2 style={styles.title}>{this.props.language === "fr"?this.props.title.fr:this.props.title.en}</h2>
                    <p style={styles.description}>{this.props.language === "fr"?this.props.description.fr:this.props.description.en}</p>
                </section>
            </div>
        )
    }
}

SectionCard.propTypes = {
    language : PropTypes.string,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
    title : PropTypes.object,
    description : PropTypes.object,
    background : PropTypes.string,
    redirect : PropTypes.string,
}