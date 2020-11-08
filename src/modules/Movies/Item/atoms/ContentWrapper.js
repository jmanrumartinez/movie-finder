import styled, { keyframes } from 'styled-components';

const expand = keyframes`
    from{
        transform: scale(1);
    }

    to{
        transform: scale(1.05);
    }
`;

export default styled.div`
    box-sizing: border-box;
    width: 100%;
    border: 2px solid transparent; 
    border-radius: 1px; 
    &:hover {
        border: 2px solid #01a8e1; 
        animation: ${expand} 0.2s linear; 
        animation-fill-mode: forwards;
    }
    &:hover .movie-details {
        display: block;
    }
`;
