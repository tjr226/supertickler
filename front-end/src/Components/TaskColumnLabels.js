import React from 'react';
import styled from 'styled-components';

const TaskColumnLabelsDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding: 10px 0px 20px 0px;
`

class TaskColumnLabels extends React.Component {
    render() {
        return (
            <TaskColumnLabelsDiv>
                <h3>Tasks</h3>
            </TaskColumnLabelsDiv>
        )
    }
}

export default TaskColumnLabels