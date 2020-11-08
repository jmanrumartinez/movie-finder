import styled from 'styled-components';

export default styled.div`
    width: 100%; 
    overflow-x: auto; 
    overflow-y: visible;
    -ms-overflow-style: none; 
    scrollbar-width: none;
    box-sizing: border-box;
    &:hover{
        margin-bottom: -101px;
    }
   &::-webkit-scrollbar {
        display: none;
    }
`;
