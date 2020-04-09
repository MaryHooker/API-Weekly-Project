import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Live from './Live';
import CatFacts from './CatFacts';
import Love from './Love';

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

    render() {
        //Will run if true and form has been submitted/if you want to send render something if it is false put !(bang) in front of this/HTML CONDITIONAL RENDERING
        if (this.state.hasLoggedIn) {
            return (
                <div>

                    <h2>Welcome back {this.state.userName}!</h2>
                    <h3>What do you need more of today?</h3>

                    <Router>
                        <Link to='/live' name='live' onClick={this.handleLinks} className='childL'>Live</Link>
                        <Link to='/catFacts' name='cat' onClick={this.handleLinks} className='childL'>Cat Facts</Link>
                        <Link to='/love' name='love' onClick={this.handleLinks} className='childL'>Love</Link>
                        <Route path='/live'>
                            <Live />
                        </Route>
                        <Route path='/catFacts'>
                            <CatFacts />
                        </Route>
                        <Route path='/love'>
                            <Love />
                        </Route>
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