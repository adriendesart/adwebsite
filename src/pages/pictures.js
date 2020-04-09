//to do : tri des gallerie par catégories
import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import Footer from "../components/navigation/footer";
import Navbar from "../components/navigation/navbar";
import Parallax from "../components/parallax";
import Woodboard from './../img/woodboard.jpg';
import {Photos} from './../photos/photos';
import PortfolioCard from "../components/portfoliocard";
import Gallery from "./../img/th.svg";
import Carousel from "./../img/eye.svg";

export default class PicturesPage extends Component{
    state ={
        currentCategory : "All",
        carouselImage : [0,0],
    }
    navbarItem = {
        navPoint1 : {
            anchor :"intro",
            name:{
                en:"Slideshow",
                fr:"Diaporama",
            },
            icon:{
                src:Carousel,
                alt:"eye icon",
            },
        },
        navPoint2 : {
            anchor :"gallery",
            name:{
                en:"Gallery",
                fr:"Gallerie",
            },
            icon:{
                src:Gallery,
                alt:"gallery icon",
            },
        },
    }
    photos = Photos;
    getRandomPicture =()=>{
        let category = Math.floor(Math.random() * Math.floor(this.photos.length));
        let picture = Math.floor(Math.random() * Math.floor(this.photos[category].pictures.length));
        this.setState({
            carouselImage : [category,picture]
        })
    }
    componentDidMount(){
        this.timerID = setInterval(
          () => this.getRandomPicture(),
          5000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render(){
        let styles = {
            title :{
                width : "100%",
                textAlign : "center",
                fontSize : this.props.deviceType==="Mobile"?"2rem":"4rem",
                backgroundColor :"white",
                opacity : "0.75",
                margin : "0",
            },
            navigationPoint:{
                position : "absolute",
                top: "50%",
                left: "50%",
            },
            carousel :{
                padding : this.props.deviceType === "Mobile"?"3rem 0":"3rem 3rem",
                display: "flex",
                flexFlow:"row wrap",
                justifyContent: "center",
                alignItems: "center",
                // width : this.props.deviceType === "Mobile"?"60vw":"80vw",
                // height : this.props.deviceType === "Mobile"?"80vw":"80vh",
                maxWidth : this.props.deviceType === "Mobile"?"100vw":"80vw",
                maxHeight : this.props.deviceType === "Mobile"?"100vh":"80vh",
                overflow : "hidden",
                position :"relative",
            },
            photoCarousel :{
                maxWidth : "80%",
                maxHeight : "80%",
                border: "5px solid black",
                borderRadius : "0.8rem",
            },
            gallery :{
                display: "flex",
                flexFlow:"row wrap",
                justifyContent: "space-around",
                alignItems: "center",
                padding : "3rem",
                position :"relative",
            }
        }
        if(this.photos){
            var gallery = this.photos.map(item => (
                <PortfolioCard
                    key={item.title.en.replace(" ","")}
                    language={this.props.language}
                    category={item.category}
                    img={item.pictures[0]}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    photos={item.pictures}
                    deviceType={this.props.deviceType}
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
                    <h1 style={styles.title}>{this.props.language==="fr"?"Portfolio":"Gallery"}</h1>
                    <section style={styles.carousel} id="intro">
                        <span style={styles.navigationPoint} id="navPoint1"/>
                        <img style={styles.photoCarousel} src={this.photos[this.state.carouselImage[0]].pictures[this.state.carouselImage[1]].src} alt={this.photos[this.state.carouselImage[0]].pictures[this.state.carouselImage[1]].alt}/>
                    </section>
                    <section style={styles.gallery} id="gallery">
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