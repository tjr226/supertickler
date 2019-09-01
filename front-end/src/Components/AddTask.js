import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../Actions'
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

    handleChanges = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <AddTaskDiv>
                <form onSubmit={this.addTask}>
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
                            Add Task
                        </button>
                    </div>
                </form>
            </AddTaskDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        potentialTaskList: state.taskreducer.potentialTaskList,
    };
};

export default connect(mapStateToProps, { addTask })(AddTask);