import React from 'react';
import { connect } from 'react-redux';
import TaskColumnLabels from './TaskColumnLabels';
import TaskItem from './TaskItem';


class TaskList extends React.Component {
    render() {
        const listToShow = this.props.potentialTaskList;
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
        potentialTaskList: state.taskreducer.potentialTaskList,
    };
};

export default connect(mapStateToProps, null)(TaskList)