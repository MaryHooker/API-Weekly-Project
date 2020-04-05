import React,{Component} from 'react';
import { Animated } from "react-animated-css";
import { Button } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullName: '',
            userName: '',
            email: '',
            password: '',
            hasBeenSubmitted: false,
         }
    }

handleChange = (event) => {
    if (event.target.name === 'fullName') {
        this.setState(
            {
                fullName: event.target.value
            }
        )
    } else if (event.target.name === 'userName') {
        this.setState(
            {
                userName: event.target.value
            }
        )
    } else if (event.target.name === 'email') {
        this.setState(
            {
                email: event.target.value
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
            hasBeenSubmitted: true
        }
    )
}

    render() { 

        if(this.state.hasBeenSubmitted){
            return(
                <div>
                    <h2>Thank you {this.state.fullName}!</h2>
                    <h1>You've been signed up!</h1>        
                </div>
            )
        }

        return ( 
            <div>
                 <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <form action="" className='signUpForm'>
                    
                        {/* <legend className='legend'>Sign Up</legend> */}

                        <div className='formGroup'>
                            <label htmlFor="fullName" className='labels'>Full Name: </label>
                            <br/>
                            <input type="text" name='fullName' id='fullName' value={this.state.fullName} onChange={this.handleChange} className='input'/>
                        </div>
        
                        <div className='formGroup'>
                            <label htmlFor="userName" className='labels'>User Name: </label>
                            <br/>
                            <input type="text" name='userName' id='userName' value={this.state.userName} onChange={this.handleChange} className='input' />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="email" className='labels'>Email: </label>
                            <br/>
                            <input type="email" name='email' id='email' value={this.state.email} onChange={this.handleChange} className='input' />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="password" className='labels'>Password: </label>
                            <br/>
                            <input type="password" name='password' id='password' value={this.state.password} onChange={this.handleChange} className='input' />
                        </div>
                        <br/>
                        <Button onClick={this.handleSubmission} variant='secondary' className='childButton'>Sign Up</Button>

                </form>
                </Animated>
            </div>
         );
    }
}
 
export default SignUp;