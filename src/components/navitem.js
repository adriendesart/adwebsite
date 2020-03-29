import React, { Component} from 'react';

export default class NavItem extends Component{
    render(){
        return(
            <div>
                <a href={this.props.ancre} className={"actived"}>
                    <span>{this.props.language==="en"?this.props.name.en:this.props.name.fr}</span>
                    <img src={this.props.icon.src} alt={this.props.icon.alt}/>
                </a>
            </div>
        )
    }
}