import styled from 'styled-components';

// Button
export const ButtonStyled = styled.button`
    // Structure
    font-family: 'Poppins';
    border: none;
    // border-radius: 0% .5rem;
    border-radius: 100px;
    //padding: 10px;
    width: 100px;
    height: 40px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .1);

    // Color
    color: ${props => `${props.color}`};
    background-color: ${props => `${props.backgroundColor}`};

    // Hover
    &:hover{
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .3), 0 4px 6px -2px rgba(0, 0, 0, .3);
    }

    // Active
    &:active{
        background-color: #4d3069;
    }
`;