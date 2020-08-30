// ****IMPORTS****
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

import Main from "./main"
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

// Header -----------
function NavbarItem(props) {
    return (
        <div class="navbar-item">
            <Link to={props.destination} style={{ textDecoration: 'none' }}><span class="navbar-item-name">{props.name}</span></Link>
        </div>
    );
}
class Header extends React.Component {
    componentDidMount() {
        $(window).scroll( () => {
            var top_of_element = $("#page-header").offset().top;
            if (top_of_element > 90 && $(window).width() > 992) {
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
                $('#my-navbar').animate({bottom: "0px"}, {duration: 250, queue: false});
                $('#my-navbar').animate({opacity: 1}, {duration: 250, queue: false});
            }
        });        
    }

    render () {
        return (
            <>
                <header id="page-header">
                    <div class="logo-wrapper">
                        <img src="/assets/icons and logos/lashmynxe-logo.png" alt="L A S H M Y N X E" class="logo img-fluid"></img>
                    </div>

                    <nav id="my-navbar">
                        <NavbarItem destination={"/"} name="Home"/>
                        <NavbarItem destination={"/appointments"} name="Book Appointment"/>
                        <NavbarItem destination={"/contact"} name="Contact"/>
                    </nav>
                    <div id="invisible-navbar-toggle"></div>
                </header>
                <div class="navbar-clearing"></div>
            </>
        );
    }
}

// Footer -----------
function Footer(props) {
    var nothing = ""
    return (
        <div id="page-footer">
            <div class="social-media-wrapper">
                <a href="https://www.instagram.com/lashmynxe/">{nothing}<i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}


class App extends React.Component {
    render () {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        );
    }
}


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root')
);
