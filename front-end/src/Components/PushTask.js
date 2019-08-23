import React from 'react';
import { connect } from 'react-redux';
import { pushTask } from '../Actions';
import styled from 'styled-components';

const PushTaskDiv = styled.div`
    display:flex;
    flex-direction:row;
    `

const FormDiv = styled.div`
    display:flex;
    flex-direction:row;
    `

class PushTask extends React.Component {
    state = {
        days_to_push: ""
    }

    pushTask = e => {
        e.preventDefault();
        this.props.pushTask({
            taskID: this.props.taskID,
            days_to_push: this.state.days_to_push
        })
        this.setState({
            days_to_push: ""
        })
    }

    handleChanges = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <PushTaskDiv>
                <form onSubmit={this.pushTask}>
                    <FormDiv className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Days to push"
                            onChange={this.handleChanges}
                            value={this.state.days_to_push}
                            name="days_to_push"
                        />
                        <button className="btn btn-primary">
                            Push Task
                    </button>
                    </FormDiv>
                </form>
            </PushTaskDiv>
        )
    }
}

export default connect(null, { pushTask })(PushTask)