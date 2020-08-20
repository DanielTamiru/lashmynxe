import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function NavbarItem(props) {
    return (<a class="navbar-item" href={props.destination}>{props.name}</a>);
}
class Header extends React.Component {
    componentDidMount() {
        $('#page-header').hover(
            function () {
                $('#my-navbar').animate({opacity: 1}, {duration: 300, queue: false});
                $('#my-navbar').animate({bottom: "0px"}, {duration: 300, queue: false});
                
            },
            function () {
                $('#my-navbar').animate({opacity: 0}, {duration: 300, queue: false});
                $('#my-navbar').animate({bottom: "10px"}, {duration: 300, queue: false});
            }
        );
    }

    render () {
        return (
            <>
                <header id="page-header">
                    <div class="logo-wrapper">
                        <img src="/lashmynxe-logo.png" alt="lashmynxe-icon-black.png" class="logo img-fluid"></img>
                    </div>

                    <nav id="my-navbar">
                        <NavbarItem destination={"#"} name="Home"/>
                        <NavbarItem destination={"#"} name="Book Appointent"/>
                        <NavbarItem destination={"#"} name="Contact"/>
                    </nav>
                    <div id="invisible-navbar-toggle"></div>
                </header>
                <div class="navbar-clearing"></div>
            </>
        );
    }
}


function Banner(props) {
    //<h4>Pellentesque pellentesque libero ac lectus posuere elementum. Nam facilisis aliquam quam vitae aliquam. Cras facilisis augue quis. </h4>
        return (
            <div class="banner">
                <div class="banner-content">
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt} color="#f0c975" size="1x"/>  Brampton, ON</h5>
                    <h1>{props.slogan}</h1>
                </div>
                <img src="/assets/images/banner-background.jpg" class="banner-background img-fluid"></img>
            </div>
        );
}

function About(props) {
        return (
            <div class="about-panel">This is why we we're reliable</div>
        );
}


class Services extends React.Component {
    render () {
        return (
            <div class="services-section">
                <div class="left-header"></div>
                <div class="service-list"></div>
            </div>
        );
    }
}


function Reviews(props) {
        return (
            <div class="reviews-section">
                <div>This is a review</div>
            </div>
        );
}

function SocialMedia(props) {
    return (
        <div class="social-media-section">
            <div>Follow our Instagram</div>
        </div>
    );
}

function Footer(props) {
    return (
        <div id="page-footer">
            <div>Footer</div>
        </div>
    );
}



//---------------------------------------
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {windowTop: 0};
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.windowTop !== window.screenTop ? window.screenTop : window.screenY) {
            this.setState({windowTop: window.screenTop ? window.screenTop : window.screenY});
            alert(this.state.windowTop);
        }
    }

    render () {
        return (
            <div id="home-page-container">  
                <Header windowTop={0}/>
                <Banner slogan={"The Boldest Lashes in Brampton"}/>
                <About/>
                <Services/>
                <Reviews/>
                <SocialMedia/>
                <Footer/>
            </div>
        );
    }
}


ReactDOM.render(<HomePage/>, document.getElementById("root"));
//*********************************************************** */
//HELPER FUNCTIONS

//ANIMATING AND POSITIONING



    //*******NOT WORKING *********/
    // header_height = document.getElementById('page-header').clientHeight;
    // if (header_height) {
    //     header_height = toString(header_height) + 'px';
    //     document.getElementById('navbar-clearing').setAttribute("style","height:" + header_height);
    //     document.getElementById('navbar-clearing').style.height = header_height;
    // }

