//Optimisation : boucler sur les sociallink
//Créer un renvoi vers une page de contact mail lors du clic sur l'adresse email.
import React, { Component } from "react";
import PropTypes from 'prop-types';
import SocialLink from "./sociallink";
import Linkedin from './../../img/linkedin.svg';
import Instagram from './../../img/instagram.svg';
import GitHub from './../../img/github-square.svg';
import Codepen from './../../img/codepen.svg';
import Youtube from './../../img/youtube-square.svg';


export default class Footer extends Component{
    render(){
        let styles ={
            footer : {
                width : "100vw",
                backgroundColor: "rgb(0, 0, 0)",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-around",
                alignItems: "center",
                color : "white",
            },
            contact : {
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "space-around",
                alignItems: "center",
                margin : "0.2rem 0",
                padding : "0",
            },
            social : {
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-around",
                alignItems: "center",
            },
            adress : {
                listStyle : "none",
                textAlign : "center",
            },
        }
        return(
            <footer style={styles.footer}>
                <ul style={styles.contact}>
                    <li style={styles.adress}>desartadrien1@gmail.com</li>
                    <li style={styles.adress}>(+32) 471/48.98.74</li>
                </ul>
                <div style={styles.social}>
                    <SocialLink
                        href = "https://www.linkedin.com/in/adrien-desart"
                        img = {{
                            src : Linkedin,
                            alt : "Linkedin icon",
                        }}
                    />
                    <SocialLink
                        href = "https://www.instagram.com/desartadrien"
                        img = {{
                            src : Instagram,
                            alt : "Instagram icon",
                        }}
                    />
                    <SocialLink
                        href = "https://github.com/adriendesart"
                        img = {{
                            src : GitHub,
                            alt : "GitHub icon",
                        }}
                    />
                    <SocialLink
                        href = "https://codepen.io/adriendesart/"
                        img = {{
                            src : Codepen,
                            alt : "Codepen icon",
                        }}
                    />
                    <SocialLink
                        href = "https://www.youtube.com/channel/UCSI-b9dcEVarKndRCbtBg9w"
                        img = {{
                            src : Youtube,
                            alt : "Youtube icon",
                        }}
                    />
                </div>
                <span>&copy; Adrien Desart - 2020</span>
            </footer>
        )
    }
}

Footer.propTypes ={
    language : PropTypes.string,
}