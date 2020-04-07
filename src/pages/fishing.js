import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import Footer from "../components/navigation/footer";
import Navbar from "../components/navigation/navbar";
import Parallax from "../components/parallax";
import Woodboard from './../img/woodboard.jpg';

export default class FishingPage extends Component{
    navbarItem = {
        navPoint1 : {
            // anchor :"intro",
            name:{
                en:"",
                fr:"",
            },
            icon:{
                src:"",
                alt:" icon",
            },
        },
    }
    render(){
        let styles = {
            navigationPoint:{
                position : "absolute",
                top: "50%",
                left: "50%",
            },
        }
        return(
            <Fragment>
                <Navbar
                    elements={this.navbarItem}
                    language={this.props.language}
                    setLanguage={this.props.setLanguage}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <Parallax background={Woodboard}>
                    <section id="intro">
                        <span style={styles.navigationPoint} id="navPoint1"/>
                    </section>
                </Parallax>
                <Footer/>
            </Fragment>
        )
    }
}

FishingPage.propTypes ={
    scrollPos : PropTypes.number,
    language : PropTypes.string,
    setLanguage : PropTypes.func,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
}