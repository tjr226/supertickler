import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../Actions';
import TaskColumnLabels from './TaskColumnLabels';
import TaskItem from './TaskItem';


class TaskList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {

        return (
            <div>
                <TaskColumnLabels />
                {this.props.fetchedTaskList
                    .map(task => <TaskItem key={task.id} task={task} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchedTaskList: state.authreducer.fetchedTaskList,
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(TaskList)