import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding: 10px 0px;
    `

class Header extends React.Component {


    render() {
        return (
            <HeaderDiv>
                <h2>SuperTickler</h2>
            </HeaderDiv>
        )
    }
}

export default Header;