// Project Imports
// Global Styles
import { 
    Button, 
    Card, 
    ButtonContainer, 
    SimpleButton, 
    Text, 
    LogoText,
    PlusButton
} from "../styles/GlobalStyles";

// Structure Styles
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
} from "../styles/Structure";

const HomePageView = () => (
    <div>
        <NavigationBar>
            {/* Left content */}
            <LeftLogoWrapper>
                <ButtonContainer>
                    <LogoText color="#784ba3"> Memorizer </LogoText>
                </ButtonContainer>
            </LeftLogoWrapper>
            {/* Center content */}
            <CenterButtonsWrapper>
                <ButtonContainer padding={10} width={100}>
                    <SimpleButton color="#784ba3">Build</SimpleButton>
                </ButtonContainer>
                <ButtonContainer padding={10} width={100}>
                    <SimpleButton color="#784ba3">Import</SimpleButton>
                </ButtonContainer>
                <ButtonContainer padding={10} width={100}>
                    <SimpleButton color="#784ba3">Start</SimpleButton>
                </ButtonContainer>
            </CenterButtonsWrapper>
            
            {/* Right content */}
            {/* not implemented yet */}
            <RightButtonWrapper>
            </RightButtonWrapper>
            
            
        </NavigationBar>
        <LeftMenu>
        </LeftMenu>
        <CenterSpace>
            <Card backgroundColor="#fff">
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
                    <Button color="#69428f">
                        Reveal
                    </Button>
                </BottomCardWrapper>
            </Card>
        </CenterSpace>
        <RightSpace>
            <RightButtonWrapper>
                <PlusButton backgroundColor="#69428f"
                        color="#fff"
                        fontSize={20}>
                    +
                </PlusButton>
            </RightButtonWrapper>
        </RightSpace>
    </div>
);

export default HomePageView;