import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Button } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            isSigningUp: false,
        }
    }

    updateIsLoggingIn = () => {
        // //sanity
        // console.log('Login button is clicked');

        this.setState(
            {
                isLoggingIn: true
            }
        )

        this.setState(
            {
                isSigningUp: false
            }
        )
    }

    updateIsSigningUp = () => {
        // //sanity
        // console.log('Signup button is clicked');

        this.setState(
            {
                isSigningUp: true
            }
        )

        this.setState(
            {
                isLoggingIn: false
            }
        )
    }

    render() {

        let displayed;

        if (this.state.isLoggingIn) {
            displayed = <Login />
        } else if (this.state.isSigningUp) {
            displayed = <SignUp />
        }

        return (

            <div>

                <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                    <div className='appContainer'>

                        <div className='title'>
                            <p className='welcomeSign'>Welcome</p>
                        </div>

                        <div className='login'>
                            <Button variant='secondary' className='mainButtons' onClick={this.updateIsLoggingIn}>Login</Button>
                        </div>

                        <div className='signUp'>
                            <Button name='button' variant='secondary' className='mainButtons' onClick={this.updateIsSigningUp}>Sign Up</Button>
                        </div>

                        <div className='display'>
                            {displayed}
                        </div>

                    </div>

                </Animated>

            </div>
        );
    }
}

export default AppContainer;