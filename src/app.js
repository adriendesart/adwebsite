import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {getDeviceTypeInfo} from './utils/responsive';
import WelcomePage from './pages/welcome';
import NotFound from './pages/error404';

const { deviceType, deviceOrientation, screenWidth, screenHeight } = getDeviceTypeInfo();

export default class App extends Component {
    state = {
        language : "fr",
        deviceType,
        deviceOrientation,
        screenWidth, 
        screenHeight,
        scrollPos: null,
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize, false);
    };
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize, false);
    };
    handleScroll = () =>{
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top
        });
    };
    handleResize = () => {
        const { deviceType, deviceOrientation, screenWidth, screenHeight } = getDeviceTypeInfo();
        this.setState({ deviceType, deviceOrientation, screenWidth, screenHeight });
      };
    setLanguage = lang =>{
        this.setState({language : lang})
    };

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage
                            scrollPos={this.state.scrollPos}
                            screenHeight={this.state.screenHeight}
                            language={this.state.language}
                            setLanguage={this.setLanguage}
                            deviceType={this.state.deviceType}
                            deviceOrientation={this.state.deviceOrientation}
                        />
                    </Route>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    };
}