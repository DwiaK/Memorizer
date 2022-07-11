import React, { Component } from "react";

// Project imports
import { TextStyled } from "./Text.Style";

export class Text extends Component{
    render(){
        return(
            <TextStyled>{this.props.text}</TextStyled>
        );
    }
}