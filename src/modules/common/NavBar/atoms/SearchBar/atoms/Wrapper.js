/* eslint-disable no-nested-ternary */
import styled, { css, keyframes } from 'styled-components';

const expand = keyframes`
    from {
        width: 30px;
    }

    to {
        width: 200px;
    }
`;

const collapse = keyframes`
from {
    width: 200px;
}

to {
    width: 30px;
}
`;

export default styled.div`
    display: flex; 
    align-items: center;
    width: ${(props) => (props.isOpen ? '200px' : '30px')};
    height: 35px; 
    background-color: ${(props) => (props.isOpen ? props.theme.secondaryColor : 'inherit')};
    border: ${(props) => (props.isOpen ? '1px solid #7d7d7d' : '1px solid transparent')};
    border-radius: 2.5px; 
    color: #ffffff; 
    padding-left: 5px; 
    animation: ${(props) => (props.animate ? (props.isOpen ? css`${expand} 0.2s linear` : css`${collapse} 0.2s linear`) : 'none')};
`;
