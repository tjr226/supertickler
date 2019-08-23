import React from 'react';
import { connect } from 'react-redux';
import { completeTask } from '../Actions';
import moment from 'moment';
import styled from 'styled-components';
import PushTask from './PushTask';

const TaskDiv = styled.div`
    display:flex;
    flex-direction:row;
    width:80%;
    justify-content:space-between;
    `

class TaskItem extends React.Component {
    state = {
        timeToPush: {
            days_to_push: ""
        }
    }

    completeTask = e => {
        e.preventDefault();
        this.props.completeTask(this.props.task.id);
    }

    hideTask = e => {
        e.preventDefault();
        this.props.hideTask(this.props.task.id);
    }


    render() {
        return (
            <TaskDiv>
                <p>{this.props.task.task_text}</p>
                <p>{moment.unix(this.props.task.unix_timestamp/1000).format('LL')}</p>
                <PushTask taskID={this.props.task.id} />

                <button className="btn btn-secondary">Hide</button>
                <button className="btn btn-secondary">Complete</button>
            </TaskDiv>
        )
    }
}

export default connect(null, { completeTask })(TaskItem)