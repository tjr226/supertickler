import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import Header from './Header';

import styled from 'styled-components';

import TopSection from './TopSection';
import TaskColumnLabels from './TaskColumnLabels';

const SuperTicklerDiv = styled.div`
    padding: 10px 20px;
`
class SuperTickler extends React.Component {
    render() {
  
        const listToShow = this.props.potentialTaskList;
        const filteredListToShow = listToShow
            .filter(task => task.hidden_boolean === 0)
            .filter(task => task.completed_boolean === 0);
        const sortedListToShow = filteredListToShow.sort((a,b) => 
            a.unix_timestamp - b.unix_timestamp
        );

        return (
            <SuperTicklerDiv>
                <Header />
                <TopSection />
                <TaskColumnLabels />
                {sortedListToShow.map(task => <TaskItem key={task.id} task={task} />)}
            </SuperTicklerDiv>
        )
    }
};

const mapStateToProps = state => {
    return {
        potentialTaskList: state.taskreducer.potentialTaskList,
    };
};

export default connect(mapStateToProps, null)(SuperTickler)