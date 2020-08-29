// ****IMPORTS****
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import $ from 'jquery';


// ****COMPONENTS****

// Header -----------
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
                        <img src="/assets/icons and logos/lashmynxe-logo.png" alt="L A S H M Y N X E" class="logo img-fluid"></img>
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


// Banner -----------
function ButtonSpot(props) { return(<div class='button_spots'></div>);}
function BookButton(props) {
    let spots = [];
    for (var i = 0; i < 60; i++) { 
        spots.push(<ButtonSpot key={i}/>); 
    }

    return (
        <a href="#" class="book-button-link"><div class='button'>
            <label>
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
            $(this).animate({'opacity':'1'}, 1500);
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
                <img src="/assets/images/banner-background.png" alt="banner background" class="banner-background img-fluid"></img>
            </div>
        );
    }    
}


// Services -----------
function ServiceCard(props) {
    return( 
        <div class="service card">
            <img class="card-img-top" src={props.img_location} alt="Lashes"></img>
            <div class="card-body">
                <header class="name-and-price">
                    <div>{props.name}</div>
                    <div class="price">{props.price}</div>
                </header>
                <p class="card-text">{props.description}</p>
                <a href="#"><button class="service-button"><span>Book </span></button></a>
            </div>
        </div>
    );
}
class Services extends React.Component {
    componentDidMount() {
        $(window).scroll( function(){
            $('.slide-in').each( function(i){
                var top_of_element = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if(bottom_of_window > top_of_element - 20){
                    $(this).animate({left: '-60px'}, {duration: 100, queue: false});
                }
            });
        }); 
    }

    render () {
        return (
            <div class="services-section">
                <div class="left-header-wrapper">
                    <header class="services-header">
                        <h6>Mega·Quality</h6>
                        <h2>OUR SERVICES</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    </header>
                </div>
                <div class="service-list">
                    <h3>Book·Buy·Beautify</h3>
                    <ServiceCard img_location="/assets/images/lashpics/lashpic-classics.png" name="Classics" price="50" description="Some quick example text to build on the card title and make up the bulk of the card's content. This is more description baby."/>
                    <hr></hr>
                    <ServiceCard img_location="/assets/images/lashpics/lashpic-hybrid.png" name="Hybrids" price="65" description="Some quick example text to build on the card title and make up the bulk of the card's content. This is more description baby."/>
                    <hr></hr>
                    <ServiceCard img_location="/assets/images/lashpics/lashpic-volumes.png" name="Volumes" price="75" description="Some quick example text to build on the card title and make up the bulk of the card's content. This is more description baby."/>
                    <hr></hr>
                    <ServiceCard img_location="/assets/images/lashpics/lashpic-mega.jpg" name="Mega Volumes" price="85" description="Some quick example text to build on the card title and make up the bulk of the card's content. This is more description baby."/>
                    <hr></hr>
                    <ServiceCard img_location="/assets/images/lashpics/lashpic-lift.png" name="Lash Lift" price="40" description="Some quick example text to build on the card title and make up the bulk of the card's content. This is more description baby."/>
                </div>
            </div>
        );
    }
}


// Reviews -----------
function ClientQuote(props) {
    return (
        <div class='float-in'>
            <p>{props.review}</p>
            <p>— {props.reviewer}</p>
        </div>
    );
}
function Reviews(props) {
        return (
            <div class="reviews-section">
                <div class="reviews container-fluid">           
                    <img src="/assets/images/quotation-marks-yellow.png" alt="''" class="review-icon img-fluid float-in" data-interval="1200"></img>

                    <div id="myCarousel" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="quote carousel-item active"><ClientQuote review="The appointment was right on time. Best eyelash tint I've ever had!" reviewer="Dazel"/></div>
                            <div class="quote carousel-item"><ClientQuote review="This is a good Lash Salon! Trust me. I'm the lash god" reviewer="Kiara"/></div>
                            <div class="quote carousel-item"><ClientQuote review="This is place freaking rocks. Mary turned me into a goddess." reviewer="Emily"/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
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



//---------------------------------------
class HomePage extends React.Component {
    componentDidMount() {
        $(window).scroll( function(){
            $('.float-in').each( function(i){
                var top_of_element = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if(bottom_of_window > top_of_element){
                    $(this).animate({opacity: "1"}, {duration: 375, queue: false});
                    $(this).animate({top: "0px"}, {duration: 300, queue: false});
                }
            });
        }); 
    }

    render () {
        return (
            <div id="home-page-container">  
                <Header/>
                <Banner slogan={"The Boldest Lashes in Brampton"}/>
                <Services/>
                <Reviews/>
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

