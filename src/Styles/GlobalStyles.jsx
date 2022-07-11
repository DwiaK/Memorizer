import styled from 'styled-components';

////////////////
// Components //
////////////////

// Text
export const Text = styled.h1`
    // Structure
    font-family: 'Poppins';
    font-weight: ${props => `${props.fontWeight}`};
    font-size: ${props => `${props.fontSize}px`};

    // Color
    color: ${props => `${props.color}`};
`;

// Logo Text
export const LogoText = styled.h1`
    // Structure
    font-family: 'Poppins';
    font-weight: ${props => `${props.fontWeight}`};
    font-size: ${props => `${props.fontSize}`};

    // Color
    color: ${props => `${props.color}`};
    
    // Design
    text-shadow: 0px 2px 3px rgba(0, 0, 0, .3);
`;

// Simple Button
export const SimpleButton = styled.button`
    // Structure
    font-family: 'Poppins';
    border: none;
    background-color: transparent;
    width: 150%;
    padding: 20px;

    // Color
    color: ${props => `${props.color}`};

    // Hover
    &:hover{
        font-weight: 800;
        background-color: #543573;
        border-radius: .5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .01), 0 4px 6px -2px rgba(0, 0, 0, .01);
    }

    // Active
    &:active{
        font-weight: 100;
    }
`;

// Button
export const Button = styled.button`
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

// Button
export const PlusButton = styled.button`
    // Structure
    font-family: 'Poppins';
    border: none;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .1);

    // Position
    position: fixed;
    bottom: 30px;
    right: 30px;

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

////////////////////////
// Complex Components //
////////////////////////

// Card
export const Card = styled.div`
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

//////////////////
// Miscelaneous //
//////////////////

export const ButtonContainer = styled.div`
    // Structure
    padding: ${props => `${props.padding}px`};
    width: ${props => `${props.width}%`};

    // Location
    margin-left: 20px;
`;

export const TopCardContent = styled.div`
    // Color
    background-color: ${props => `${props.backgroundColor}`};

    // Design
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .3), 0 4px 6px -2px rgba(0, 0, 0, .3);
    border-radius: 10px;
`;