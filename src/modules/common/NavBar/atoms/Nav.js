import styled from 'styled-components';

export default styled.nav`
    background-color: ${(props) => props.theme.mainColor};
    padding: 16px 50px;     
    color: #fff; 
    flex-direction: row; 
    display: flex;
    justify-content: space-between; 
    align-items: center
    
`;
