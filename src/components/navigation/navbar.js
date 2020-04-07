import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavItem from './navitem';
import FRFLAG from './../../img/Flag_of_France.svg';
import ENFLAG from './../../img/Flag_of_the_United_Kingdom.svg';
import LANGUAGE from './../../img/language.svg';
import Home from './../../img/home.svg';

export default class Navbar extends Component{
    state = {
        over : false,
    }
    handleChangeLang = (e,newLang) =>{
        e.preventDefault()
        this.props.setLanguage(newLang)
    }
    handleOver =()=>{
        this.setState({
            over: !this.state.over,
        })
    }

    render(){
        //css :
        let styles = {
            navBar : {
                height: "100vh",
                margin: "0",
                padding: "0",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "1",
            },
            langTab : {
                position : "relative",
                top:"0",
                left: "-100%",
            },
            langGroup : {
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
            langBtn :{
                backgroundColor: "black",
                textDecoration: "none",
                margin:"0px",
                padding:"0px",
                border: "none",
            },
            langFlag:{
                padding: "0.2rem 1rem",
                width: "2rem",
            },
            langIcon :{
                width: "2rem",
                height: "2rem",
                padding: "0.2rem",
                border: this.state.visible?"1px solid rgb(145, 231, 16)":"1px solid white",
                borderRadius: "50%",
            },
        }
        if(this.props.elements){
            var navList = Object.keys(this.props.elements).map(item => (
                <NavItem 
                    anchor={this.props.elements[item].anchor}
                    navPoint={item}
                    name={this.props.elements[item].name}
                    icon={this.props.elements[item].icon}
                    language={this.props.language}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
            ))
        }
        if(this.props.backToHome){
            var backToHome = (
                <NavItem 
                    name={{fr : "Page d'accueil", en : "Home page"}}
                    icon={{src : Home, alt : "home icon"}}
                    language={this.props.language}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                    redirect = {true}
                />
            )
        }
        
        return(
            <Fragment>
            <nav style={styles.navBar}>
                {backToHome}
                {navList}
                <div style={styles.langTab}>
                    <div style={styles.langGroup} onMouseEnter={this.handleOver} onMouseLeave={this.handleOver}>
                        <button type="button" onClick={(e)=>this.handleChangeLang(e,"fr")} style={styles.langBtn}>
                            <img src={FRFLAG} alt="French flag" style={styles.langFlag}/>
                        </button>
                        <button type="button" onClick={(e)=>this.handleChangeLang(e,"en")} style={styles.langBtn}>
                            <img src={ENFLAG} alt="English flag" style={styles.langFlag}/>
                        </button>
                        <img src={LANGUAGE} alt="language icon" style={styles.langIcon}/>
                    </div>
                </div>
            </nav>
            </Fragment>
        )
    }
}

Navbar.propTypes = {
    elements : PropTypes.object.isRequired,
    language : PropTypes.string,
    setLanguage : PropTypes.func,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
    backToHome : PropTypes.bool,
}

Navbar.defaultProps = {
    backToHome : true,
}

//use navbar with 
    //<span style={styles.navigationPoint} id="navPoint1"/> 
    // & navigationPoint:{
    // position : "absolute",
    // top: "50%",
    // left: "50%",}
    // & navbarItem = {
    // navPoint1 : {
    //     anchor :"id",
    //     name:{
    //         en:"name",
    //         fr:"name",
    //     },
    //     icon:{
    //         src:,
    //         alt:" icon",
    //     },
    // },
    // }
    //in div to use the anchor and navigation animation