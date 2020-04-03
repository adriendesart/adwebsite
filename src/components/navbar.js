import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {isVisible} from './../utils/displayed';
import './../css/navbar.css';
import ADBrand from './../img/ADbrand.svg';
import Male from './../img/male.svg';
import Diver from './../img/diver.svg';
// import Fish from './../img/fish.svg';
// import Picture from './../img/video.svg';
// import FRFLAG from './../img/Flag_of_France.svg';
// import ENFLAG from './../img/Flag_of_the_United_Kingdom.svg';

export default class Navbar extends Component{
    state = {};

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    };
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    };
    handleScroll = () =>{
        let aVisibility = [];
        this.props.elements.forEach(elm => {
            let newEntry = []
            newEntry.push(elm.replace("-",""))
            newEntry.push(isVisible(elm)!=="unvisible"?true:false)
            aVisibility.push(newEntry)
        });
        this.setState(Object.fromEntries(aVisibility));
    };
    handleChangeLang = (e,newLang) =>{
        e.preventDefault();
        this.props.setLanguage(newLang);
    };

    render(){
        return(
            <Fragment>
            <nav>
                <div>
                    <a href="#parallax-intro" className={this.state.test1 && "actived"}>
                        <span>{this.props.language==="en"?"Welcome":"Bienvenu"}</span>
                        <img src={ADBrand} alt="AD logo"/>
                    </a>
                </div>
                <div>
                    <a href="#presentation" className={"actived"}>
                        <span>{this.props.language==="en"?"About me":"A propos"}</span>
                        <img src={Male} alt="About me"/>
                    </a>
                </div>
                <div>
                    <a href="#diving-presentation" className={"actived"}>
                        <span>{this.props.language==="en"?"Diving":"Plongée"}</span>
                        <img src={Diver} alt="Diving blog"/>
                    </a>
                </div>
            </nav>
            {/* <div id="language-selector">
                <div>
                    <button type="button" onClick={(e)=>this.handleChangeLang(e,"fr")}><img src={FRFLAG} alt="French flag"/></button>
                    <button type="button" onClick={(e)=>this.handleChangeLang(e,"en")}><img src={ENFLAG} alt="English flag"/></button>
                </div>
            </div> */}
            </Fragment>
        )
    }
}

Navbar.propTypes = {
    elements : PropTypes.array.isRequired,
}