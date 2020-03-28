import React, { Component, Fragment } from 'react';
import './../css/navbar.css'
import ADBrand from './../img/ADbrand.svg';
import Male from './../img/male.svg';
import HydraulicEngeneering from './../img/hydraulicingeneering.svg';
import Diver from './../img/diver.svg';
import Fish from './../img/fish.svg';
import Picture from './../img/video.svg'
// import FRFLAG from './../img/Flag_of_France.svg';
// import ENFLAG from './../img/Flag_of_the_United_Kingdom.svg';

export default class Navbar extends Component{
    handleChangeLang = (e,newLang) =>{
        e.preventDefault();
        this.props.setLanguage(newLang);
    };

    render(){

        let activedPart;
        let screenHeight = this.props.screenHeight;
        if(-this.props.scrollPos<= (screenHeight*0.5)){
            activedPart = 1;
        }
        else if(screenHeight*0.5 <= -this.props.scrollPos && -this.props.scrollPos<= (screenHeight*1.5)){
            activedPart = 2;
        }
        else if((screenHeight*1.5) <= -this.props.scrollPos && -this.props.scrollPos<= (screenHeight*2.5)){
            activedPart = 3;
        }
        else if((screenHeight*2.5) <= -this.props.scrollPos && -this.props.scrollPos<= (screenHeight*3.5)){
            activedPart = 4;
        }
        else if((screenHeight*3.5) <= -this.props.scrollPos && -this.props.scrollPos<= (screenHeight*4.5)){
            activedPart = 5;
        }

        return(
            <Fragment>
            <nav>
                <div>
                    <a href="#parallax-intro" className={activedPart === 1 && "actived"}>
                        <span>{this.props.language==="en"?"Home":"Accueil"}</span>
                        <img src={ADBrand} alt="AD logo"/>
                    </a>
                </div>
                <div>
                    <a href="#presentation" className={activedPart === 2 && "actived"}>
                        <span>{this.props.language==="en"?"About me":"A propos"}</span>
                        <img src={Male} alt="About me"/>
                    </a>
                </div>
                <div>
                    <a href="#bla" className={activedPart === 3 && "actived"}>
                        <span>{this.props.language==="en"?"Engineering":"Génie hydraulique"}</span>
                        <img src={HydraulicEngeneering} alt="Hydaulic engineering"/>
                    </a>
                </div>
                <div>
                    <a href="#bla" className={activedPart === 4 && "actived"}>
                        <span>{this.props.language==="en"?"Diving":"Plongée"}</span>
                        <img src={Diver} alt="Diving blog"/>
                    </a>
                </div>
                <div>
                    <a href="#bla" className={activedPart === 5 && "actived"}>
                        <span>{this.props.language==="en"?"Fishing":"Pêche"}</span>
                        <img src={Fish} alt="Fishing blog"/>
                    </a>
                </div>
                <div>
                    <a href="#bla" className={activedPart === 6 && "actived"}>
                        <span>{this.props.language==="en"?"Pictures":"Photo"}</span>
                        <img src={Picture} alt="portfolio"/>
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