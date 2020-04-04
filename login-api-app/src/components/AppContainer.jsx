import React, { Component } from 'react';
import { Animated } from "react-animated-css";


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <p className='welcomeSign'>Welcome</p>
                </Animated>
            </div>
        );
    }
}

export default AppContainer;