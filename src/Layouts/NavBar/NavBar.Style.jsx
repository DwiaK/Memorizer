import styled from "styled-components";

// NavBar at the top
export const NavigationBarItems = styled.nav`
    // Structure
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    // Design
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .01), 0 4px 6px -2px rgba(0, 0, 0, .1);
    // Color
    background-color: #4c3266;
`;

// NavBar UL
export const NavigationBarMenu = styled.ul`
    // Structure
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: center;
`;

// NavBar LI
export const NavigationBarLinks = styled.li`
    // Structure
    font-family: 'Poppins';
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;

    // Hover
    &:hover {
        background-color: #5f3f7e;
        border-radius: .5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .01), 0 4px 6px -2px rgba(0, 0, 0, .01);
        transition: all 0.2s ease-out;
    }
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

