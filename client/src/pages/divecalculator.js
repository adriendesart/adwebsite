import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import Footer from "../components/navigation/footer";
import Navbar from "../components/navigation/navbar";
import Parallax from "../components/parallax";
import Woodboard from './../img/woodboard.jpg';
import Diver from './../img/diver.svg';
import Gear from './../img/gear.svg';
import Planer from './../img/object-group 2.svg';

export default class ProDiveCalculator extends Component{
    navbarItem = {
        navPoint1 : {
            anchor :"intro",
            name:{
                en:"Intro",
                fr:"Intro",
            },
            icon:{
                src:Gear,
                alt:"gear icon",
            },
        },
        navPoint2 : {
            anchor :"planer",
            name:{
                en:"Planer",
                fr:"Planification",
            },
            icon:{
                src:Planer,
                alt:"planer icon",
            },
        },
        navPoint3 : {
            anchor :"dive",
            name:{
                en:"Real dive",
                fr:"En plongée",
            },
            icon:{
                src:Diver,
                alt:"diver icon",
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
                    <section id="planer">
                        <span style={styles.navigationPoint} id="navPoint2"/>
                    </section>
                    <section id="dive">
                        <span style={styles.navigationPoint} id="navPoint3"/>
                    </section>
                </Parallax>
                <Footer/>
            </Fragment>
        )
    }
}

ProDiveCalculator.propTypes ={
    language : PropTypes.string,
    setLanguage : PropTypes.func,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
}