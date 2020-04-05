import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class SectionCard extends Component{
    state = {
        over : false,
    }
    handleOver =()=>{
        this.setState({
            over: !this.state.over,
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
                display: "flex",
                flexFlow:"column nowrap",
                justifyContent: "flex-end",
                alignItems: "center",
                margin : '1rem 3rem',
                zIndex : "2",
            },
            movingSection :{
                position: "relative",
                width:"100%",
                transition: "transform 2s",
                transform: this.state.over && "translateY(-50vh)",
                opacity : "0.9",
            },
            hiddenSection :{
                overflow : "hidden",
                width:"100%",
                padding : "0",
                margin : "0",
                position: "absolute",
                top : "98%",
                left : "0",
            },
            title :{
                width : "100%",
                height : this.props.deviceType !== "Mobile" && "5vh",
                padding : "0",
                margin : "0",
                textAlign : "center",
                backgroundColor:"white",
                position : "relative",
                // borderTop:"2px solid black",
                textDecoration:"underline",
            },
            description :{
                position : "relative",
                // top : "98%",
                // left : "0",
                width : "100%",
                height : "45vh",
                margin : "0",
                padding: "0",
                textAlign : "center",
                backgroundColor:"white",
            },
            footer : {
                position: "relative",
                width:"100%",
                height : "5vh",
                backgroundColor:"#FFF",
                display:"flex",
                flexFlow:"row nowrap",
                justifyContent:"space-around",
                alignItems:"center",
                borderTop:"2px solid black",
            }
        }

        return(
            <div style={styles.card} onMouseEnter={this.handleOver} onMouseLeave={this.handleOver}>
                <section style={styles.movingSection}>
                    <div style={styles.hiddenSection}>
                        <h2 style={styles.title}>{this.props.language === "fr"?this.props.title.fr:this.props.title.en}</h2>
                        <div style={styles.description}>
                            <p style={{padding : "0 0.2rem", margin: "0"}}>{this.props.language === "fr"?this.props.description.fr:this.props.description.en}</p>
                        </div>
                    </div>
                </section>
                {/* <section style={styles.footer}>
                    <button>{this.props.language === "fr"?"Voir plus":"See more"}</button>
                </section> */}
            </div>
        )
    }
}

SectionCard.propTypes = {
    language : PropTypes.string,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
    title : PropTypes.string,
    description : PropTypes.string,
    background : PropTypes.string,
}