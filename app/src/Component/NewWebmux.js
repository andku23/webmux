import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Header, Image, Button, Card } from 'semantic-ui-react';
import Slider from "react-slick";

/*
    Name: NewWebmux
    Description: This is the button that generates
    a new webmux and redirects to the /webmux page.
    It floats over the background slides

 */
class NewWebmux extends Component {
    render() {
        return(
            <div className="App-overlay">
                <Card centered small>
                    <Card.Content>
                        <Card.Header>
                            <a href='/webmux'>
                                <Button circular massive color = 'pink'>
                                    <h1>+</h1>
                                </Button>
                            </a>
                        </Card.Header>
                        <Card.Description>
                            Create WebMux
                        </Card.Description>
                    </Card.Content>
                </Card>


            </div>
        );


    }
}

export default NewWebmux;