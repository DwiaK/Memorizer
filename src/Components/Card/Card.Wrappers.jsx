import styled from "styled-components";

////////////////
// Loc Blocks //
////////////////

// Menu at the left side
export const LeftMenu = styled.div`
    // Structure
    display: flex;
    flex-direction: column;
`;

// Card at the center
export const CenterSpace = styled.div`
    // Structure
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
`;

// Button ADD at the Right
export const RightSpace = styled.div`
    // Structure
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

//////////////
// Wrappers //
//////////////

// Navigation Bar
// Left
export const LeftLogoWrapper = styled.div`
    // Structure
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

// Center
export const CenterButtonsWrapper = styled.div`
    // Structure
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding-right: 5%;

    // Design
    //box-shadow: 0 1px 1px -2px rgba(0, 0, 0, .1), 0 4px 6px -5px rgba(0, 0, 0, .1);
`;

export const TopCardWrapper = styled.div`
    // Structure
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 25%;
`;

export const CenterCardWrapper = styled.div`
    // Structure
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
`;

export const BottomCardWrapper = styled.div`
    // Structure
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30%;
`;

// Right
export const RightButtonWrapper = styled.div`
    // Structure
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;