import React, { Component } from "react";

// Project Imports
import { 
    CenterButtonsWrapper, 
    CenterCardWrapper, 
    CenterSpace, 
    LeftLogoWrapper, 
    LeftMenu, 
    NavigationBar,
    TopCardWrapper,
    RightButtonWrapper,
    BottomCardWrapper,
    RightSpace
} from "./Main.Style";

// Import Components
import { Card } from '../../Components/Card/Card';
import { PlusButton } from "../../Components/PlusButton/PlusButton";

export class Main extends Component{
    render(){
        return <>
            {/* LEFT */}
            <LeftMenu>
            </LeftMenu>

            {/* CENTER */}
            <CenterSpace>
                <Card/>
            </CenterSpace>

            {/* RIGHT */}
            <RightSpace>
                <RightButtonWrapper>
                    <PlusButton backgroundColor="#69428f"
                            color="#fff"
                            fontSize={20}
                            type="+"/>
                </RightButtonWrapper>
            </RightSpace>
        </>
    }
}