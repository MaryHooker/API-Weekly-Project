import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Button } from 'react-bootstrap';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            
            <div>

                <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                    <div className='appContainer'>

                    <div className='title'>
                        <p className='welcomeSign'>Welcome</p>
                    </div>


                    <div className='login'>
                        <Button variant='success' className='buttons'>Login</Button>
                    </div>

                    <br />

                    <div className='signUp'>
                        <Button name='button' variant='success' className='buttons'>Sign Up</Button>
                    </div>

                    </div>

                </Animated>

            </div>
        );
    }
}

export default AppContainer;