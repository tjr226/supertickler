import React from 'react';
import styled from 'styled-components';

import AddTask from './AddTask';
import ShowHideButtons from './ShowHideButtons';

const TopSectionDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    `

class TopSection extends React.Component {
    render() {
        return (
            <TopSectionDiv>
                <AddTask />
                <ShowHideButtons />
            </TopSectionDiv>
        )
    }
}

export default TopSection;