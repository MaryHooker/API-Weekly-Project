import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FirstApi from './FirstApi';
import SecondApi from './SecondApi';
import ThirdApi from './ThirdApi';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userName: '',
            password: '',
            //CONDITIONAL HTML RENDERING
            hasLoggedIn: false,

        }
    }

    handleChange = (event) => {

        if (event.target.name === 'userName') {
            this.setState(
                {
                    userName: event.target.value
                }
            )
        } else if (event.target.name === 'password') {
            this.setState(
                {
                    password: event.target.value
                }
            )
        }

    }

    handleSubmission = (event) => {
        event.preventDefault();
        console.log(this.state);

        //update state of has been submitted/HTML RENDERING/LOOK ABOVE RETURN
        this.setState(
            {
                hasLoggedIn: true
            }
        )
    }

    handleLinks = (event) => {
        if (event.target.name === 'api1') {
            return (
                <div>
                    <Route to='/first'>
                        <FirstApi />
                    </Route>
                </div>
            )
        } else if (event.target.name === 'api2') {
            return (
                <div>
                    <Route to='/second'>
                        <SecondApi />
                    </Route>
                </div>
            )
        } else if (event.target.name === 'api3') {
            return (
                <Route to='/third'>
                    <ThirdApi />
                </Route>
            )
        }
    }

    render() {
        //Will run if true and form has been submitted/if you want to send render something if it is false put !(bang) in front of this/HTML CONDITIONAL RENDERING
        if (this.state.hasLoggedIn) {
            return (
                <div>

                    <h2>Welcome back {this.state.userName}!</h2>

                    <Router>
                        <Link path='/first' name='api1' onClick={this.handleLinks} className='childL'>API 1</Link>
                        <Link path='/second' name='api2' onClick={this.handleLinks} className='childL'>API 2</Link>
                        <Link path='/third' name='api3' onClick={this.handleLinks} className='childL'>API 3</Link>
                    </Router>

                </div>
            )
        }

        return (
            <div>
                <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    
                    <form action="" className='signUpForm'>

                        {/* <legend className='legend'>Login</legend> */}

                        <div className='formGroup'>
                            <label htmlFor="userName" className='labels'>User Name: </label>
                            <br />
                            <input type="text" name='userName' id='userName' value={this.state.userName} onChange={this.handleChange} className='input' />
                        </div>

                        <div className='formGroup'>
                            <label htmlFor="password" className='labels'>Password: </label>
                            <br />
                            <input type="password" name='password' id='password' value={this.state.password} onChange={this.handleChange} className='input' />
                        </div>
                        <br />
                        <Button onClick={this.handleSubmission} className='childButton' variant='secondary'>Login</Button>

                    </form>
                </Animated>
            </div>
        );
    }
}

export default Login;