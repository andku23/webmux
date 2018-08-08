import React, { Component } from 'react';
import '../Pages/App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown, List, Image, Segment, Container, Header, Menu, Grid } from 'semantic-ui-react';
import Slider from "react-slick";


class NavBar extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state

        return(
            <div>
                <Menu borderless inverted>
                    <Container>
                        <Menu.Item
                            name='Logo'
                            active={activeItem === 'editorials'}
                            onClick={this.handleItemClick}
                        >
                            <h2>WebMux</h2>
                        </Menu.Item>


                        <Menu.Menu position = 'right'>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'upcomingEvents'}
                                onClick={this.handleItemClick}
                            >
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