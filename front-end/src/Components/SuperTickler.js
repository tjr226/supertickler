import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import Header from './Header';

import styled from 'styled-components';
import moment from 'moment';

import TopSection from './TopSection';
import TaskColumnLabels from './TaskColumnLabels';

class SuperTickler extends React.Component {
    render() {
  
        const listToShow = this.props.potentialTaskList;
        const sortedListToShow = listToShow.sort((a,b) => 
            a.unix_timestamp - b.unix_timestamp
        )

        console.log(sortedListToShow);

        return (
            <div>
                <Header />
                <TopSection />
                <TaskColumnLabels />
                {sortedListToShow.map(task => <TaskItem key={task.id} task={task} />)}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        potentialTaskList: state.taskreducer.potentialTaskList,
    };
};

export default connect(mapStateToProps, null)(SuperTickler)