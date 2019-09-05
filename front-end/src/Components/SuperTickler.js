// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components
import Header from './Header';
import TaskList from './TaskList';
import TopSection from './TopSection';

const SuperTicklerDiv = styled.div`
    padding: 10px 20px;
`
class SuperTickler extends React.Component {
    render() {

        return (
            <SuperTicklerDiv>
                <Header />
                <TopSection />
                <TaskList />
            </SuperTicklerDiv>
        )
    }
};

export default SuperTickler;