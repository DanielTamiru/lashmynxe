import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

// Banner -----------
function ButtonSpot(props) { return(<div class='button_spots'></div>);}
function BookButton(props) {
    let spots = [];
    for (var i = 0; i < 60; i++) { 
        spots.push(<ButtonSpot key={i}/>); 
    }

    return (
        <span class="book-button-link"><div class='button'>
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
        </div></span>
    );
}
class Banner extends React.Component {
    render() {
        return (
            <div class="banner">
                <div class="banner-content">
                    <h5 class="fade-in"><i class='fa fa-map-marker map-icon 1x' aria-hidden="true"></i>Brampton, ON</h5>
                    <h1 class="fade-in">{this.props.slogan}</h1>
                    <Link to="/appointments" style={{ textDecoration: 'none' }}><BookButton/></Link>
                    
                </div>
                <img src="/assets/images/banner-background.png" alt="banner background" class="banner-background img-fluid"></img>
            </div>
        );
    }    
}


// Services -----------
class ServiceCard extends React.Component {
    render() {
        return( 
            <div class="service card">
                <img class="card-img-top" src={this.props.img_location} alt="Lashes"></img>
                <div class="card-body">
                    <header class="name-and-price">
                        <div>{this.props.name}</div>
                        <div class="price">{this.props.price}<span class="refill-label">{this.props.alt}</span></div>
                    </header>
                    <p class="card-text">{this.props.description}</p>
                    <Link to="/appointments" style={{ textDecoration: 'none' }}><button class="service-button" onClick={(e) => this.props.onServiceChange(this.props.booking_url)}><span>Book </span></button></Link>
                </div>
            </div>
        );
    }
}
class Services extends React.Component {
    render () {
        
        return (
            <div class="services-section">
                <div class="left-header-wrapper">
                    <header class="services-header">
                        <h6>Top·Quality</h6>
                        <h2>SERVICES</h2>
                        <p>When you look good, you feel good. That's why we strive to help you feel beautiful with lashes that not only compliment your eye shape, but also your personality. At Lashmynxe, we only work with quality products that feel as light as a feather. Choose from our wide selection of services that last up to 4 weeks!</p>
                    </header>
                </div>
                <div class="service-list">
                    <h3>Book·Buy·Beautify</h3>
                    <ServiceCard onServiceChange={this.props.onServiceChange}
                                 img_location="/assets/images/lashpics/lashpic-classics.png"
                                 name="Classics" 
                                 price="55 | 30"
                                 alt="Refill"
                                 booking_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/scc8dfb2441b051321b4bf350afd53ad20e8ad430"
                                 description="Applied on a 1:1 ratio, making for simple, beautiful, natural-looking lash extensions."/>
                    <hr></hr>
                    <ServiceCard onServiceChange={this.props.onServiceChange}
                                 img_location="/assets/images/lashpics/lashpic-hybrid.png" 
                                 name="Hybrids" 
                                 price="65 | 40" 
                                 alt="Refill"
                                 booking_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s8251a1ce3dfa4a0c42a18dbb5b2e8af1736d32aa"
                                 description="A mixture of both classic lashes and volume lashes. Choose hybrid if you want the best of both worlds."/>
                    <hr></hr>
                    <ServiceCard onServiceChange={this.props.onServiceChange}
                                 img_location="/assets/images/lashpics/lashpic-volumes.png" 
                                 name="Volumes" 
                                 price="75 | 50"
                                 alt="Refill"
                                 booking_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s8444045a60102077d9f4dbe9a730cf76120fdf8c"
                                 description="Used to achieve a fuller, fluffier look. Anywhere between 2-8 ultra-fine extensions are fanned out and applied to a single natural lash."/>
                    <hr></hr>
                    <ServiceCard onServiceChange={this.props.onServiceChange}
                                 img_location="/assets/images/lashpics/lashpic-mega.jpg" 
                                 name="Mega Volumes" 
                                 price="85 | 60"
                                 alt="Refill"
                                 booking_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s88ff4c109de2a1ccaef03884cca3533719da8947"
                                 description="Be bold! With this technique, 10 - 20 extensions are applied to each natural lash."/>
                    <hr></hr>
                    <ServiceCard onServiceChange={this.props.onServiceChange}
                                 img_location="/assets/images/lashpics/lashpic-lift.png" 
                                 name="Lash Lift" 
                                 price="40 + 5"
                                 alt="Tint" 
                                 booking_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/sa4ed0ebebe9916c4fee10102d55b2bdd66219d70"
                                 description="Curl all of your lashes upwards to leave them looking longer, and your eyes more open and bright"/>
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
                            <div class="quote carousel-item active"><ClientQuote review="I loved my lashes! Mary was so careful and gentle with each lash and her studio is so cute ♡ 10/10 would recommend!" reviewer="Angel"/></div>
                            <div class="quote carousel-item"><ClientQuote review="One of the best lash technicians I've been with; she's super hygienic and accommodating" reviewer="Cazandra"/></div>
                            <div class="quote carousel-item"><ClientQuote review="Full, voluminous lashes and great service all for a reasonable price" reviewer="Kiara"/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

/// ********

class HomePage extends React.Component {
    componentDidMount() {
        //fade-in animation
        $('.fade-in').each(function(i) {
            $(this).animate({'opacity':'1'}, 1200);
        });

        $(".navbar-item-name:contains('Home')").each(function(i) {
            $(this).css("color", "black");
        });
    }
    componentWillUnmount() {
        $(".navbar-item-name:contains('Home')").each(function(i) {
            $(this).css("color", "#747474");
        });
    }

    render () {
        return (
            <div id="home-page-container">  
                <Banner slogan={"Beautiful lashes are just a blink away"}/>
                <Services onServiceChange={this.props.onServiceChange}/>
                <Reviews/>
            </div>
        );
    }
}

export default HomePage;
