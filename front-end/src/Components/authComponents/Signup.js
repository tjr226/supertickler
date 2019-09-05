import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../Actions';

class Signup extends React.Component {
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

    signup = e => {
        e.preventDefault();
        this.props.register(this.state.credentials)
            .then(() => {
                this.props.history.push('/login');
            })
    }

    render() {
        return (
            <form onSubmit={this.signup}>
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
                <button>Sign Up</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    registering: state.registering
})

export default connect(
    mapStateToProps,
    { register }
)( Signup );