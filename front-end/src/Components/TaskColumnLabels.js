import React from 'react';
import styled from 'styled-components';

const TaskColumnLabelsDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:80%;
`

class TaskColumnLabels extends React.Component {
    render() {
        return (
            <TaskColumnLabelsDiv>
                <h4>Task</h4>
                <h4>Date</h4>
                
                <h4>Days to push</h4>
                <h4>Push task</h4>
                <h4>Hide</h4>
                <h4>Complete</h4>
            </TaskColumnLabelsDiv>
        )
    }
}

export default TaskColumnLabels