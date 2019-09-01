import React from 'react';
import { connect } from 'react-redux';
import { completeTask, hideTask, hideTaskWeek, hideTaskMonth, hideTaskYear } from '../Actions';
import moment from 'moment';
import styled from 'styled-components';

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

    hideTaskWeek = e => {
        e.preventDefault();
        this.props.hideTaskWeek(this.props.task.id);
    }

    hideTaskMonth = e => {
        e.preventDefault();
        this.props.hideTaskMonth(this.props.task.id);
    }

    hideTaskYear = e => {
        e.preventDefault();
        this.props.hideTaskYear(this.props.task.id);
    }


    render() {
        return (
            <TaskDiv>
                <p>{this.props.task.task_text}</p>
                <p>{moment.unix(this.props.task.unix_timestamp/1000).format('LL')}</p>
                <button onClick={this.hideTaskWeek} className="btn btn-secondary">Hide 1 Week</button>
                <button onClick={this.hideTaskMonth} className="btn btn-secondary">Hide 1 Month</button>
                <button onClick={this.hideTaskYear} className="btn btn-secondary">Hide 1 Year</button>
                <button onClick={this.completeTask} className="btn btn-secondary">Complete</button>
            </TaskDiv>
        )
    }
}

export default connect(null, { completeTask, hideTask, hideTaskWeek, hideTaskMonth, hideTaskYear })(TaskItem)