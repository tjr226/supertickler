import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import { signup } from '../Actions';

class Signup extends React.Component {
    state = {
        newCredentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            newCredentials: {
                ...this.state.newCredentials,
                [e.target.name]: e.target.value
            }
        })
    }

    signup = e => {
        e.preventDefault();
        this.props.signup(this.state.newCredentials)
            .then(() => {
                this.props.hhistory.push('./supertickler');
            })
    }

    render() {
        return (
            <div className="login-container">
                <nav className="navigation">
                    <Link className="nav-login" to="/login">Login</Link>
                    <Link className="nav-signup" to="/signup">Signup</Link>
                </nav>
                <div className="form-container">
                    <form onSubmit={this.signup}>
                        <h1>Sign up!</h1>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.newCredentials.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={this.state.newCredentials.password}
                            onChange={this.handleChange}
                        />
                        <input
                            type="checkbox"
                            name="instructor"
                            value={this.state.newCredentials.instructor}
                            onChange={this.handleChange}
                        />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { signup }
)(Signup);