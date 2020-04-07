import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {getDeviceTypeInfo} from './utils/responsive';
import {getBrowserLanguage} from './utils/browserLang';
import WelcomePage from './pages/welcome';
import NotFound from './pages/error404';
import ProDiveCalculator from './pages/divecalculator';
import PicturesPage from './pages/pictures';
import FishingPage from './pages/fishing';
import DivingPage from './pages/diving';
import WebPage from './pages/web';

const { deviceType, deviceOrientation, screenWidth, screenHeight } = getDeviceTypeInfo();

export default class App extends Component {
    language = getBrowserLanguage()
    state = {
        language : this.language,
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
                            language={this.state.language}
                            setLanguage={this.setLanguage}
                            deviceType={this.state.deviceType}
                            deviceOrientation={this.state.deviceOrientation}
                        />
                    </Route>
                    <Route path="/pictures">
                        <PicturesPage
                            scrollPos={this.state.scrollPos}
                            language={this.state.language}
                            setLanguage={this.setLanguage}
                            deviceType={this.state.deviceType}
                            deviceOrientation={this.state.deviceOrientation}
                        />
                    </Route>
                    <Route path="/fishing">
                        <FishingPage
                            scrollPos={this.state.scrollPos}
                            language={this.state.language}
                            setLanguage={this.setLanguage}
                            deviceType={this.state.deviceType}
                            deviceOrientation={this.state.deviceOrientation}
                        />
                    </Route>
                    <Route path="/diving">
                        <DivingPage
                            scrollPos={this.state.scrollPos}
                            language={this.state.language}
                            setLanguage={this.setLanguage}
                            deviceType={this.state.deviceType}
                            deviceOrientation={this.state.deviceOrientation}
                        />
                    </Route>
                    <Route path="/web">
                        <WebPage
                            scrollPos={this.state.scrollPos}
                            language={this.state.language}
                            setLanguage={this.setLanguage}
                            deviceType={this.state.deviceType}
                            deviceOrientation={this.state.deviceOrientation}
                        />
                    </Route>
                    <Route path="/pro-dive-calculator">
                        <ProDiveCalculator
                            scrollPos={this.state.scrollPos}
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