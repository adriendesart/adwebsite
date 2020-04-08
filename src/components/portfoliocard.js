//Onclick : Ouvrir un diaporama/modal
import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

export default class PortfolioCard extends Component{
    state ={
        over : false,
        clicked : false,
        order : 1,
    }
    handleOver =()=>{
        this.setState({
            over: !this.state.over,
        })
    }
    handleClicked =()=>{
        this.setState({
            clicked: !this.state.clicked,
        })
    }
    handleMore =()=>{
        let oldOrder= { ...this.state}
        this.setState({
            order: oldOrder.order+1,
        })
    }
    handleLess =()=>{
        let oldOrder= { ...this.state}
        this.setState({
            order: oldOrder.order-1,
        })
    }
    render(){
        let styles ={
            card :{
                width : this.props.deviceType === "Mobile"?"80vw":"20vw",
                height : this.props.deviceType === "Mobile"?"80vw":"40vh",
                maxWidth : this.props.deviceType === "Mobile"?"80vw":"20vw",
                maxHeight : this.props.deviceType === "Mobile"?"80vw":"40vh",
                padding : "0.5rem",
                border: "1px solid black",
                borderRadius : "1rem",
                backgroundColor : "white",
                overflow : "hidden",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 20.2), 0 6px 20px 0 rgba(0, 0, 0, 20.19)",
            },
            content :{
                display: "flex",
                flexFlow:"column nowrap",
                justifyContent: "flex-start",
                alignItems: "center",
            },
            image :{
                border: "1px solid black",
                borderRadius : "0.8rem",
                width : "100%",
                maxHeight : "50%",
            },
            title :{
                textDecoration : "underline",
                margin : "0",
                padding : "0.5rem",
            },
            description :{
                margin : "0",
                padding : "0.5rem",
            },
            modal :{
                position: "fixed",
                zIndex: "1",
                left: "0",
                top: "0",
                width: "100vw",
                height: "100vh",
                overflow: "auto",
                backgroundColor: "rgba(0,0,0,0.9)",
            },
            closeBtn :{
                textDecoration : "none",
                backgroundColor: "transparent",
                border: "none",
                position: "absolute",
                top: "0",
                right: "2rem",
                color: "#f1f1f1",
                fontSize: "4rem",
                fontWeight: "bold",
            },
        }
        if(this.state.clicked){
            var modal = (
                <div style={styles.modal}> 
                    <button style={styles.closeBtn} onClick={this.handleClicked}>&times;</button>
                    {this.state.order<this.props.photos.pictures.length && 
                    <button style={styles.moreBtn} onClick={this.handleMore}>&gt;</button>}
                    {this.state.order>1 &&
                    <button style={styles.lessBtn} onClick={this.handleLess}>&lt;</button>}
                    <span>{this.state.order}/{this.props.photos.pictures.length}</span>
                </div>
            )
        }
        return(
            <Fragment>
                <div style={styles.card} onMouseEnter={this.handleOver} onMouseLeave={this.handleOver} onClick={this.handleClicked}> 
                    <div style={styles.content}>
                        <img style={styles.image} src={this.props.img.src} alt={this.props.img.alt}/>
                        <h4 style={styles.title}>{this.props.language==="fr"?this.props.title.fr:this.props.title.en}</h4>
                        <p style={styles.description}>{this.props.language==="fr"?this.props.description.fr:this.props.description.en}</p>
                        <time>{this.props.date}</time>
                    </div>
                </div>
                {modal}
            </Fragment>
        )
    }
}

PortfolioCard.propTypes = {
    language : PropTypes.string,
    category : PropTypes.array,
    img : PropTypes.string,
    title : PropTypes.object,
    description : PropTypes.object,
    date : PropTypes.string,
    photos : PropTypes.object,
}