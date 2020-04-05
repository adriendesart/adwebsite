import React, { Component } from "react"
import PropTypes from 'prop-types';

export default class Parallax extends Component{
    render(){
        //css :
        let styles = {
            parallax : {
                margin: "0",
                padding: "0",
                width: "100%",
                minHeight:"100vh",
                backgroundImage: `url(${this.props.background})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexFlow:  this.props.orientation + " nowrap",
                justifyContent: "space-around",
                alignItems: "center",
                position: "relative",
            }
        }
        return(
            <section style={styles.parallax} id={this.props.id}>
                {this.props.children}
            </section>
        )
    }
}

Parallax.propTypes = {
    background : PropTypes.string.isRequired,
    orientation : PropTypes.string.isRequired,
    id : PropTypes.string,
}