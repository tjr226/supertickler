import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// hideAllTasks, showAllTasks, showNext20 are not from "auth" portion
import { hideAllTasks, showAllTasks, showNext20,
    hideAllAuth, showAllAuth,
} from '../Actions';

const ShowHideButtonsDiv = styled.div`
    display:flex;
    flex-direction:column;
    `

class ShowHideButtons extends React.Component {
    hideAllTasks = e => {
        e.preventDefault();
        this.props.hideAllTasks();
    }

    hideAllAuth = e => {
        e.preventDefault();
        this.props.hideAllAuth();
    }

    showAllTasks = e => {
        e.preventDefault();
        this.props.showAllTasks();
    }

    showAllAuth = e => {
        e.preventDefault();
        this.props.showAllAuth();
    }

    showNext20 = e => {
        e.preventDefault();
        this.props.showNext20();
    }

    render() {
        return (
            <ShowHideButtonsDiv>
                <button onClick={this.showNext20} className="btn btn-secondary">Show Next 20</button>
                <button onClick={this.showAllAuth} className="btn btn-secondary">Show All</button>
                <button onClick={this.hideAllAuth} className="btn btn-secondary">Hide All</button>
            </ShowHideButtonsDiv>
        )
    }
}

export default connect(null, { 
    hideAllTasks, showAllTasks, showNext20,
    hideAllAuth, showAllAuth,
})(ShowHideButtons);