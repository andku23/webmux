import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Pages/App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Menu, Container } from 'semantic-ui-react';


/*
    Name: NavBar
    Description: Navbar, puts links into the url
    and then loads into them.  At least I think
    that's how it works, I'm still kinda learning

 */
class NavBar extends Component {
     render() {
        return(
            <div className = 'App-themecolor1'>
                <Menu borderless inverted>
                    <Container>
                        <Menu.Item as={NavLink} exact to = '/webmux'>
                            <h2>WebMux</h2>
                        </Menu.Item>
                        <Menu.Menu position = 'right'>
                            <Menu.Item>
                                <h4>About</h4>
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>
            </div>

        );
    }
}

export default NavBar;