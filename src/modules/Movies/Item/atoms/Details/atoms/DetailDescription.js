import styled from 'styled-components';

export default styled.p`
    color: #ffffff;
    font-size: 0.85em; 
    text-overflow: ellipsis; 
    padding: 5px 10px; 
    margin: 0; 
    background-color: ${(props) => props.theme.mainColor};
    white-space: normal;
    height: 25px; 
    text-overflow: ellipsis;
    overflow: hidden; 
`;
