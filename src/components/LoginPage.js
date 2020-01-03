import React from 'react';
import {Link} from "react-router-dom";

class LoginPage extends React.Component {
    state = {
        user: '',
        pass: '',
    };
    path = `/list`;
    loginCred = {
        username:"admin",
        password:"password"
    };

    handleUser = (e) => {
        this.setState({
            user: e.target.value,
        });
    };
    handlePass = (e) => {
        this.setState({
            pass: e.target.value,
        })
    };
    
    forgotPass = () => {
        alert('Username:admin\npassword:password')
    };

    //admin login

    login = () => {
        if(this.state.user === this.loginCred.username &&
            this.state.pass === this.loginCred.password) {
            window.location = '/list';
        }
        else {
            //clears inputs
            this.setState({user:'', pass:'',});
            //tells user password
            return this.forgotPass();
        }
    };

    render() {
        return (
            <div className="loginContainer">
                <div className="loginModal">
                    <div className="loginHeader">
                        <h3>Login</h3>
                    </div>
                    <div className="userIns">
                        <input
                            className="userIn"
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            onChange={this.handleUser}
                            value={this.state.user}/>
                        <input
                            className="userIn"
                            type="password"
                            name="password"
                            onChange={this.handlePass}
                            placeholder="Password"
                            value={this.state.pass}/>
                    </div>
                    <div
                        className="forgotPassword"
                        onClick={this.forgotPass}
                    >Forgot Password?
                    </div>
                    <button
                        className="loginSubmit"//add class active when pass and user is true, enables button
                        type="submit"
                        onClick={this.login}
                    >Login
                    </button>
                </div>
            </div>
        )
    }
}

export default LoginPage;