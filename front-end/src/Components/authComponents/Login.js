import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../Actions';

class Login extends React.Component {
    state = {
        credentials: {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/supertickler');
            })
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button>Log In</button>
            </form>
        )
    }
}

// const mapStateToProps = state => ({
//     loggingIn: state.loggingIn
// })

export default connect(
    null,
    { login }
)( Login );