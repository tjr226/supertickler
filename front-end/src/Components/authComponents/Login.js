import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { login } from '../../Actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push("/supertickler");
        })
    };

    render() {
        return (
            <div className="login-container">
                <nav className="navigation">
                    <Link className="nav-login" to="/login">Login</Link>
                    <Link className="nav-signup" to="/signup">Signup</Link>
                </nav>
                <form onSubmit={(e) => this.login(e)}>
                    <h1>Log In</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button onClick={(e) => this.login(e)}>
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}

export default connect(null, { login})(Login);