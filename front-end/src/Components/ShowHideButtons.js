import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { hideAllTasks, showAllTasks, showNext20 } from '../Actions';

const ShowHideButtonsDiv = styled.div`
    display:flex;
    flex-direction:column;
    `

class ShowHideButtons extends React.Component {
    hideAllTasks = e => {
        e.preventDefault();
        this.props.hideAllTasks();
    }

    showAllTasks = e => {
        e.preventDefault();
        this.props.showAllTasks();
    }

    showNext20 = e => {
        e.preventDefault();
        this.props.showNext20();
    }

    render() {
        return (
            <ShowHideButtonsDiv>
                <button onClick={this.showNext20} className="btn btn-secondary">Show Next 20</button>
                <button onClick={this.showAllTasks} className="btn btn-secondary">Show All</button>
                <button onClick={this.hideAllTasks} className="btn btn-secondary">Hide All</button>
            </ShowHideButtonsDiv>
        )
    }
}

export default connect(null, { hideAllTasks, showAllTasks, showNext20 })(ShowHideButtons);