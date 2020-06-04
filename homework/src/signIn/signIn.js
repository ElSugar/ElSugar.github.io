import React, {Component} from 'react';
import fire from '../config/Fire';
import './signIn.css';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = (<input className="loginBtn" type="submit" style={{marginLeft:'110px'}} onClick={this.login} value="Enter" />);

        return(
            <div className="form_block">
                <div id="title" style={{marginLeft:'125px'}}>{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form>
                        <input type="text"
                        placeholder="Your E-mail" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />

                        <input type="password"
                        placeholder="Your password"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" />

                        {submitBtn}
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;