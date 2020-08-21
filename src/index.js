import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function NavbarItem(props) {
    return (
        <div class="navbar-item">
            <a class="navbar-item" href={props.destination}>{props.name}</a>
        </div>
    );
}
class Header extends React.Component {
    componentDidMount() {
        $(window).scroll( () => {
            var top_of_element = $("#page-header").offset().top;
            if (top_of_element > 90) {
                $('#my-navbar').animate({opacity: 0}, {duration: 180, queue: false});
                $('#my-navbar').animate({bottom: "10px"}, {duration: 180, queue: false});

                $('#page-header').on({
                        mouseenter: function () {
                            $('#my-navbar').animate({opacity: 1}, {duration: 300, queue: false});
                            $('#my-navbar').animate({bottom: "0px"}, {duration: 300, queue: false});    
                        },
                        mouseleave: function () {
                            $('#my-navbar').animate({opacity: 0}, {duration: 300, queue: false});
                            $('#my-navbar').animate({bottom: "10px"}, {duration: 300, queue: false});
                        }
                    }
                );
            } else {
                $('#page-header').off();
                $('#my-navbar').animate({bottom: "0px"}, {duration: 180, queue: false});
                $('#my-navbar').animate({opacity: 1}, {duration: 180, queue: false});
            }
        });        
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

function ButtonSpot(props) { return(<div class='button_spots'></div>);}
function BookButton(props) {
    let spots = [];
    for (var i = 0; i < 60; i++) { 
        spots.push(<ButtonSpot key={i}/>); 
    }

    return (
        <a href="#" class="book-button-link"><div class='button'>
            <label for='button'>
                <div class='button_inner q'>
                    <i class='l ion-log-in fa fa-calendar-check-o' aria-hidden="true"></i>
                    <span class='t'>B O O K </span><span class='t'> N O W</span>
                    <span><i class='tick ion-checkmark-round'></i></span>

                    <div class='b_l_quad'>
                        {spots}
                    </div>
                </div>
            </label>
        </div></a>
    );
}
class Banner extends React.Component {
    componentDidMount() {
        $('.fade-in').each(function(i) {
            $(this).animate({'opacity':'1'}, 1000);
        });
    }

    render() {
        return (
            <div class="banner">
                <div class="banner-content">
                    <h5 class="fade-in"><i class='fa fa-map-marker map-icon 1x' aria-hidden="true"></i>Brampton, ON</h5>
                    <h1 class="fade-in">{this.props.slogan}</h1>
                    <BookButton/>

                    
                </div>
                <img src="/assets/images/banner-background.jpg" class="banner-background img-fluid"></img>
            </div>
        );
    }    
}

function About(props) {
        return (
            <div class="about-panel">
                <h2 class='float-in'>Float-in animation example</h2>
            </div>
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
    componentDidMount() {
        $(window).scroll( function(){
            $('.float-in').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if(bottom_of_window > bottom_of_element){
                    $(this).animate({opacity: "1"}, {duration: 800, queue: false});
                    $(this).animate({top: "0px"}, {duration: 350, queue: false});
                }
            });
        }); 
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

