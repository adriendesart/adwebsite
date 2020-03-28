import React, { Component, Fragment } from 'react';
import './../css/welcome.css'
import ADBrand from './../img/ADbrand.svg';
import ArrowDown from './../img/arrow-down.svg';
import PortraitAD from './../img/PortraitAD.jpg';
import Navbar from '../components/navbar';


export default class Welcome extends Component{

    render(){
        return(
            <Fragment>
                <Navbar
                    scrollPos={this.props.scrollPos}
                    screenHeight={this.props.screenHeight}
                    language={this.props.language}
                    setLanguage={this.props.setLanguage}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <section className="parallax" id="parallax-intro">
                    <div id="logo-brand">
                        <img src={ADBrand} alt="AD logo"/>
                    </div>
                    <button disabled>
                        Scroll down
                        <img src={ArrowDown} alt="scroll-down"/>
                    </button>
                </section>
                <section id="presentation">
                    {(this.props.scrollPos === null || this.props.scrollPos === 0) && <span id="copyrightAD">Adrien Desart - 2020</span>}
                    <div className="block">
                        <img src={PortraitAD} alt="Adrien Desart portrait"/>
                        <blockquote>"Je m'appelle Adrien, lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla lorem ipsum blabla bla bla"</blockquote>
                    </div>
                </section>
                <section className="parallax" id="parallax-presentation">
                    
                </section>
            </Fragment>
        )
    };
}