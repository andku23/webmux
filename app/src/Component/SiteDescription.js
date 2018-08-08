import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import '../Pages/App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';


class SiteDescription extends Component {
    render() {
        return (
            <div ui container centered>
                <Container text className='App-description'>
                    <p>
                        WebMux is a browser-based multiplex display for webpages, images, and local files.  Use WebMux to free up your screen space and allow for fluid, efficient display of web-based content.
                    </p>
                </Container>

            </div>
        );
    }
}

export default SiteDescription;
