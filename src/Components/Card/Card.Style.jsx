import styled from "styled-components";

// Card
export const CardStyled = styled.div`
    // Color
    background-color: ${props => `${props.backgroundColor}`};

    // Structure
    width: 260px;
    height: 190px;
    padding-bottom: 150px;

    // Design
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .3), 0 4px 6px -2px rgba(0, 0, 0, .3);
    border-radius: 10px;
`;