import React from 'react';
import { connect } from 'react-redux';
import { addTask, createTaskAuth } from '../Actions'
import styled from 'styled-components';

const AddTaskDiv = styled.div`
    width:33%;
    `

class AddTask extends React.Component {
    state = {
        task_text: "",
    }

    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state)
        this.setState({
            task_text: ""
        })
    };

    createTaskAuth = e => {
        e.preventDefault();
        this.props.createTaskAuth(this.state.task_text)
        this.setState({
            task_text: ""
        })
    }

    handleChanges = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <AddTaskDiv>
                <form onSubmit={this.createTaskAuth}>
                    <div className="form-group">
                        <textarea
                            rows="5"
                            className="form-control"
                            placeholder="New Task"
                            onChange={this.handleChanges}
                            value={this.state.task_text}
                            name="task_text"
                        />
                        <button className="btn btn-primary">
                            Create Task
                        </button>
                    </div>
                </form>
            </AddTaskDiv>
        )
    }
}

export default connect(null, { addTask, createTaskAuth })(AddTask);