import styled from 'styled-components';

// Text
export const TextStyled = styled.h1`
    // Structure
    font-family: 'Poppins';
    font-weight: ${props => `${props.fontWeight}`};
    font-size: ${props => `${props.fontSize}px`};

    // Color
    color: ${props => `${props.color}`};
`;