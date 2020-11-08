import styled from 'styled-components';

export default styled.div`
    width: 100%; 
    padding: 10px; 
    overflow-x: auto; 
    overflow-y: visible;
    -ms-overflow-style: none; 
    scrollbar-width: none;
    box-sizing: border-box;
    position: relative; 
    margin-bottom: ${(props) => (props.expand ? '-119.44px' : '0')};
    z-index: ${(props) => (props.expand ? '5' : '1')}; 
   &::-webkit-scrollbar {
        display: none;
    }
`;
