import React, { Component } from 'react';

// Project Imports
import { ButtonStyled } from './Button.Style';

export class Button extends Component {
    render() {
        return(
            <ButtonStyled>{this.props.type}</ButtonStyled>
        );
    }
}