import React, { Component } from 'react';

// Project Imports
import { CardStyled } from './Card.Style';
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
} from './Card.Wrappers';

// Import Component
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

export class Card extends Component {
    render() {
        return(
            <CardStyled backgroundColor="#fff">
                <TopCardWrapper>
                <Text
                    color="#c7c7c7"
                    fontSize={15}
                    fontWeight={100}>
                        Deck Name
                    </Text>
                </TopCardWrapper>
                <CenterCardWrapper>
                    <Text 
                    color="#784ba3"
                    fontSize={25}>
                        Word name
                    </Text>
                </CenterCardWrapper>
                <BottomCardWrapper>
                    <Button color="#69428f"
                            type="Reveal">
                    </Button>
                </BottomCardWrapper>
            </CardStyled>
        ); 
    }
}