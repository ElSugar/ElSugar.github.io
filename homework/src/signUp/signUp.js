import React, {Component} from 'react';
import fire from '../config/Fire';
import './signUp.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Register New User',
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

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = (<input className="loginBtn" type="submit" style={{marginLeft:'100px'}} onClick={this.register} value="Register" />);

        return(
            <div className="form_block">
                <div id="title" style={{marginLeft:'85px'}}>{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form>
                        <input type="text" 
                        placeholder="Input E-mail"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />

                        <input type="password" 
                        placeholder="Input password"
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

export default SignUp;