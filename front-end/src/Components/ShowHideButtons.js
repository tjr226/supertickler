import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { hideAllTasks, showAllTasks } from '../Actions';

const ShowHideButtonsDiv = styled.div`
    display:flex;
    flex-direction:column;
    `

class ShowHideButtons extends React.Component {
    hideAllTasks = e => {
        e.preventDefault();
        this.props.hideAllTasks('payload string');
    }

    showAllTasks = e => {
        e.preventDefault();
        this.props.showAllTasks('payload string');
    }

    
    render() {
        return (
            <ShowHideButtonsDiv>
                <button className="btn btn-secondary">Show Today</button>
                <button onClick={this.hideAllTasks} className="btn btn-secondary">Hide All</button>
                <button onClick={this.showAllTasks} className="btn btn-secondary">Show All</button>
            </ShowHideButtonsDiv>
        )
    }
}

export default connect(null, { hideAllTasks, showAllTasks })(ShowHideButtons);