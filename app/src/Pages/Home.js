import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import BackgroundSlides from '../Component/BackgroundSlides';
import NewWebmux from '../Component/NewWebmux';
import NavBar from '../Component/NavBar';
import SiteDescription from '../Component/SiteDescription';
import Footer from '../Component/Footer';

/*
    Name: Home
    Description: Home page that contains the navbar, slide
    show, brief description and allows you to create a webmux
    from here

 */
class Home extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <BackgroundSlides/>
                <NewWebmux/>
                <SiteDescription/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
