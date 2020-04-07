import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navigation/navbar';
import Parallax from '../components/parallax'
//image :
import ADBrand from './../img/ADbrand.svg';
import Male from './../img/male.svg';
import Gear from './../img/gear.svg';
import ArrowDown from './../img/arrow-down.svg';
import PortraitAD from './../img/PortraitAD.jpg';
import IntroBackground from '../img/DSC_0129.JPG';
import BlogBackground from '../img/DSC_0114.JPG';
import SectionCard from '../components/sectioncard';
import FishingV from '../img/photo-pêche.jpg';
import Diving from '../img/diving.jpg';
import Picture from '../img/DSC_0151.JPG';
import Webdev from '../img/codingscreen.jpg';
import Footer from '../components/navigation/footer';


export default class Welcome extends Component{
    navbarItem = {
        navPoint1 : {
            anchor :"intro",
            name:{
                en:"Home",
                fr:"Accueil",
            },
            icon:{
                src:ADBrand,
                alt:"AD icon",
            },
        },
        navPoint2 : {
            anchor :"about",
            name:{
                en:"About me",
                fr:"A mon sujet",
            },
            icon:{
                src:Male,
                alt:"about icon",
            },
        },
        navPoint3 : {
            anchor :"blogs",
            name:{
                en:"Blogs",
                fr:"Mes blogs",
            },
            icon:{
                src:Gear,
                alt:"blog icon",
            },
        },
    }

    render(){
        //css :
        let styles = {
            navigationPoint:{
                position : "absolute",
                top: "50%",
            },
            backBrand :{
                width: this.props.deviceType === "Mobile"?"33vh":"50vh",
                height: this.props.deviceType === "Mobile"?"33vh":"50vh",
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3rem",
            },
            logoBrand :{
                width: "75%",
            },
            arrowBtn :{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                textDecoration: "none",
                fontSize: "2rem",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "space-around",
                alignItems: "center",
            },
            arrow :{
                height: "2rem",
                transform: "translateY(0)",
                animationName: "hvr-wobble-vertical",
                animationDuration: "1s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
            },
            copyright:{
                position: "fixed",
                bottom: this.props.deviceType !== "Mobile" &&"0",
                top:this.props.deviceType === "Mobile" &&"0",
                right: "0",
                zIndex: "1",
                color: "white",
                padding: this.props.deviceType !== "Mobile" && "0.2rem 2rem",
                width: "100%",
                textAlign : this.props.deviceType === "Mobile"?"center":"end",
                backgroundColor : this.props.deviceType === "Mobile" && "black",
            },
            aboutSection:{
                position: "relative",
                backgroundColor: "black",
            },
            block:{
                minHeight: "100vh",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "space-around",
                alignItems: "center",
            },
            profilePicture:{
                margin: "2.6rem 2.6rem 0",
                width: this.props.deviceType === "Mobile"?"33vh":"50vh",
                borderRadius: "50%",
            },
            aboutDescription:{
                margin: "0 2.6rem 2.6rem",
                padding: "0 1rem",
                color: "white",
                textAlign: "center",
            },
            blogDiv :{
                display: "flex",
                flexFlow: (this.props.deviceType!=="Mobile"?"row":"column")+" nowrap",
                justifyContent: "space-around",
                alignItems: "center",
                margin : "0 2.6rem",
            },
        }
        let wobble = `@keyframes hvr-wobble-vertical {
                16.65% {
                  transform: translateY(8px);
                }
            
                33.3% {
                  transform: translateY(-6px);
                }
            
                49.95% {
                  transform: translateY(4px);
                }
            
                66.6% {
                  transform: translateY(-2px);
                }
            
                83.25% {
                  transform: translateY(1px);
                }
            
                100% {
                  transform: translateY(0);
                }
            }`;

        let copyright = !(this.props.scrollPos < -1) && <span style={styles.copyright}>&copy; Adrien Desart - 2020</span>

        return(
            <Fragment>
                <Navbar
                    elements={this.navbarItem}
                    language={this.props.language}
                    setLanguage={this.props.setLanguage}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                    backToHome={false}
                />
                <Parallax background={IntroBackground} id="intro">
                    <span style={styles.navigationPoint} id="navPoint1"/>
                    <div style={styles.backBrand}>
                        <img src={ADBrand} alt="AD logo" style={styles.logoBrand}/>
                    </div>
                    <button disabled style={styles.arrowBtn}>
                        {this.props.language==="en"?"Welcome":"Bienvenue"}
                        <style children={wobble} />
                        <img src={ArrowDown} alt="scroll-down" style={styles.arrow}/>
                    </button>
                </Parallax>
                <section id="about" style={styles.aboutSection}>
                    <span style={styles.navigationPoint} id="navPoint2"/>
                    {this.props.deviceType!=="Mobile" && copyright}
                    <div style={styles.block}>
                        <img src={PortraitAD} alt="Adrien Desart portrait" style={styles.profilePicture}/>
                        <blockquote style={styles.aboutDescription}> {this.props.language==="en"?"I'm Adrien. I work as commercial diver for the Puclic Service of Wallonia and also as freelance web developer. My passions are scuba diving, streetfishing, wed developpement and take pictures. This site would share about my work, my ideas and my project. I hope you will enjoy."
                        :"Bonjour, je m'apelle Adrien. Je suis contrôleur d'infrastructure subaquatique pour le compte du Service Publique de Wallonie ainsi que web développeur indépendant. Mes centres d'intérets sont la plongée, la pêche, le développement web et la photo. Ce site à pour vocation de partager avec ceux qui le désire mes passions, mes idées et mes travaux."}
                        </blockquote>
                    </div>
                </section>
                <Parallax background={BlogBackground} id="blogs">
                    <span style={styles.navigationPoint} id="navPoint3"/>
                    <div style={styles.blogDiv}>
                        <SectionCard
                           language={this.props.language}
                           deviceType={this.props.deviceType}
                           deviceOrientation={this.props.deviceOrientation}
                           title={{fr : "Pêche", en : "Fishing"}}
                           description={{fr : "En construction", en : "Wait for it"}}
                           background={FishingV}
                           redirect="fishing"
                        />
                        <SectionCard
                           language={this.props.language}
                           deviceType={this.props.deviceType}
                           deviceOrientation={this.props.deviceOrientation}
                           title={{fr : "Plongée", en : "Diving"}}
                           description={{fr : "En construction", en : "Wait for it"}}
                           background={Diving}
                           redirect="diving"
                        />
                    </div>
                    <div style={styles.blogDiv}>
                        <SectionCard
                            language={this.props.language}
                            deviceType={this.props.deviceType}
                            deviceOrientation={this.props.deviceOrientation}
                            title={{fr : "Code", en : "Web Dev"}}
                            description={{fr : "En construction", en : "Wait for it"}}
                            background={Webdev}
                            redirect="web"
                        />
                        <SectionCard
                            language={this.props.language}
                            deviceType={this.props.deviceType}
                            deviceOrientation={this.props.deviceOrientation}
                            title={{fr : "Portfolio", en : "Gallery"}}
                            description={{fr : "En construction", en : "Wait for it"}}
                            background={Picture}
                            redirect="pictures"
                        />
                    </div>
                </Parallax>
                <Footer/>
            </Fragment>
        )
    }
}

Welcome.propTypes = {
    scrollPos : PropTypes.number,
    language : PropTypes.string,
    setLanguage : PropTypes.func,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
}