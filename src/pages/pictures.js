import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import Footer from "../components/navigation/footer";
import Navbar from "../components/navigation/navbar";
import Parallax from "../components/parallax";
import Woodboard from './../img/woodboard.jpg';
import {Photos} from './../photos/photos';
import PortfolioCard from "../components/portfoliocard";

export default class PicturesPage extends Component{
    navbarItem = {
        navPoint1 : {
            anchor :"intro",
            name:{
                en:"Slideshow",
                fr:"Diaporama",
            },
            icon:{
                src:"",
                alt:" icon",
            },
        },
        navPoint2 : {
            anchor :"gallery",
            name:{
                en:"Gallery",
                fr:"Gallerie",
            },
            icon:{
                src:"",
                alt:" icon",
            },
        },
    }
    photos = Photos;
    render(){
        let styles = {
            navigationPoint:{
                position : "absolute",
                top: "50%",
                left: "50%",
            },
            gallery :{

            }
        }
        if(this.photos){
            var gallery = this.photos.map(item => (
                <PortfolioCard
                    language={this.props.language}
                    category={item.category}
                    img={item.pictures[0]}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    photos={item}
                />
            ))
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
                        <h1>{this.props.language==="fr"?"Mon portfolio":"My gallery"}</h1>

                    </section>
                    <section id="gallery">
                        <span style={styles.navigationPoint} id="navPoint2"/>
                        {gallery}
                    </section>
                </Parallax>
                <Footer/>
            </Fragment>
        )
    }
}

PicturesPage.propTypes ={
    language : PropTypes.string,
    setLanguage : PropTypes.func,
    deviceType : PropTypes.string,
    deviceOrientation : PropTypes.string,
}