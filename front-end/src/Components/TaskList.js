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
        // console.log("this props fetchedTaskList", this.props.fetchedTaskList);
        // console.log(this.props);
        const listToShow = this.props.fetchedTaskList;
        const filteredListToShow = listToShow
            .filter(task => task.hidden_boolean === 0)
            .filter(task => task.completed_boolean === 0);
        const sortedListToShow = filteredListToShow.sort((a, b) =>
            a.unix_timestamp - b.unix_timestamp
        );

        return (
            <div>
                <TaskColumnLabels />
                {sortedListToShow.map(task => <TaskItem key={task.id} task={task} />)}
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