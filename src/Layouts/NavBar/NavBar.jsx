import React, { Component } from 'react';

// Project imports
import { NavigationBarItems, 
         LogoText, 
         NavigationBarLinks,
         NavigationBarMenu } from './NavBar.Style';
import { MenuItems } from "./MenuItems";

export class NavBar extends Component{
    state = { clicked: false }

    render(){
        return(
            <NavigationBarItems className="NavbarItems">
                <LogoText className="navbar-logo" color="#784ba3"> 
                    Memorizer 
                </LogoText>
                <NavigationBarMenu>
                    {
                        MenuItems.map((item, index) => {
                            return(
                                <li>
                                    <NavigationBarLinks className={item.cName} href={item.url}>
                                        {item.title}
                                    </NavigationBarLinks>
                                </li>
                            )
                        })
                    }
                </NavigationBarMenu>
            </NavigationBarItems>
        )
    }
}