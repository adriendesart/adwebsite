import React, { Component, Fragment } from 'react';
import './../css/welcome.css'
import ADBrand from './../img/ADbrand.svg';
import ArrowDown from './../img/arrow-down.svg';
import PortraitAD from './../img/PortraitAD.jpg';
import Navbar from '../components/navbar';
import SocialLink from '../components/sociallink';
import Linkedin from './../img/linkedin.svg'
import Instagram from './../img/instagram.svg'
import GitHub from './../img/github-square.svg'
import Codepen from './../img/codepen.svg'
import Youtube from './../img/youtube-square.svg'


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
                        {this.props.language==="en"?"Scroll down":"Scroll vers le bas"}
                        <img src={ArrowDown} alt="scroll-down"/>
                    </button>
                </section>
                <section id="presentation">
                    {(this.props.scrollPos === null || this.props.scrollPos === 0) && <span id="copyrightAD">&copy; Adrien Desart - 2020</span>}
                    <div className="block">
                        <img id="profil-picture" src={PortraitAD} alt="Adrien Desart portrait"/>
                        <div>
                            <blockquote>{this.props.language==="en"?"I'm Adrien. I work as commercial diver for the Puclic Service of Wallonia and also as freelance web developer. My passions are scuba diving, streetfishing, wed developpement and take pictures. This site would share about my work, my ideas and my project. I hope you will enjoy."
                            :"Bonjour, je m'apelle Adrien. Je suis contrôleur d'infrastructure subaquatique pour le compte du Service Publique de Wallonie ainsi que web développeur indépendant. Mes centres d'intérets sont la plongée, la pêche, le développement web et la photo. Ce site à pour vocation de partager avec ceux qui le désire mes passions, mes idées et mes travaux."}</blockquote>
                        </div>
                        <div>
                            <SocialLink
                                socialName="Linkedin"
                                href="https://www.linkedin.com/in/adrien-desart"
                                imgSrc={Linkedin}
                                imgAlt="Linkedin"
                            />
                            <SocialLink
                                socialName="Instagram"
                                href="https://www.instagram.com/desartadrien"
                                imgSrc={Instagram}
                                imgAlt="Instagram about fishing"
                            />
                            <SocialLink
                                socialName="GitHub"
                                href="https://github.com/adriendesart"
                                imgSrc={GitHub}
                                imgAlt="GitHub"
                            /><SocialLink
                                socialName="Codepen"
                                href="https://codepen.io/adriendesart/"
                                imgSrc={Codepen}
                                imgAlt="Codepen"
                            />
                            <SocialLink
                                socialName="Youtube"
                                href="https://www.youtube.com/channel/UCSI-b9dcEVarKndRCbtBg9w"
                                imgSrc={Youtube}
                                imgAlt="Youtube"
                            />
                        </div>
                    </div>
                </section>
                <section className="parallax" id="diving-presentation">
                    
                </section>
                <section id="fishing-presentation">

                </section>
                <section className="parallax" id="pictures-presentation">
                    
                </section>
                <section id="mindbox-presentation">

                </section>
            </Fragment>
        )
    };
}