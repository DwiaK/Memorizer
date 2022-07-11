import React, { Component } from "react";

// Project Imports
import { PlusButtonStyled } from "./PlusButton.Style";

export class PlusButton extends Component{

    render() {
        return <PlusButtonStyled>{this.props.type}</PlusButtonStyled>
    }
}