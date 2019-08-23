import React from 'react';
import styled from 'styled-components';

const ShowHideButtonsDiv = styled.div`
    display:flex;
    flex-direction:column;
    `

class ShowHideButtons extends React.Component {
    render() {
        return (
            <ShowHideButtonsDiv>
                <button className="btn btn-secondary">Show Today</button>
                <button className="btn btn-secondary">Hide All</button>
                <button className="btn btn-secondary">Show All</button>
            </ShowHideButtonsDiv>
        )
    }
}

export default ShowHideButtons;