import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
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

    render() {
        //Will run if true and form has been submitted/if you want to send render something if it is false put !(bang) in front of this/HTML CONDITIONAL RENDERING
        if(this.state.hasLoggedIn){
            return(
                <div>
                   
                    <h2>Welcome back {this.state.userName}!</h2>
                    <h1>What would you like to explore today?</h1>

                    <Router>
                        <Link path='/first'>API 1</Link>
                        <Link path='/second'>API 2</Link>
                        <Link path='/third'>API 3</Link>
                        <Route to='/first'>
                            <FirstApi/>
                        </Route>
                        <Route to='/second'>
                            <SecondApi/>
                        </Route>
                        <Route to='/third'>
                            <ThirdApi/>
                        </Route>
                    </Router>
                    
                </div>
            )
        }

        return (
            <div>
                 <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <form action="" className='signUpForm'></form>
                <form action="">

                        {/* <legend className='legend'>Login</legend> */}

                        <div className='formGroup'>
                            <label htmlFor="userName" className='labels'>User Name: </label>
                            <br/>
                            <input type="text" name='userName' id='userName' value={this.state.userName} onChange={this.handleChange} className='input' />
                        </div>

                        <div className='formGroup'>
                            <label htmlFor="password" className='labels'>Password: </label>
                            <br/>
                            <input type="password" name='password' id='password' value={this.state.password} onChange={this.handleChange} className='input' />
                        </div>
                        <br/>
                        <Button onClick={this.handleSubmission} className='childButton'>Login</Button>

                </form>
                </Animated>
            </div>
        );
    }
}

export default Login;