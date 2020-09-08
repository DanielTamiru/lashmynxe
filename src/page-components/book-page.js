import React from 'react';
import $ from 'jquery';
const default_url = "https://lashmynxe.setmore.com";

class ServiceMiniCard extends React.Component {
    render() {
        return(
            <div class="mini-service-card">
                <header>
                    <img src={this.props.imgsrc} alt="Lash Pic"></img>
                    <h5>{this.props.name}</h5>
                </header>
                <div class="pricing">
                    <div class="price-box" onClick={(e) => {
                        this.props.onServiceChange(this.props.url);
                        let widget_position = $("#widget-wrapper").offset();
                        widget_position.top -= 20;
                        $("html, body").animate({scrollTop:  widget_position.top});
                    }}>
                        <div>{this.props.main}</div>
                        <div class="price"><b>{this.props.price}</b></div>
                    </div>
                    <hr></hr>
                    <div class="price-box" onClick={(e) => {
                        this.props.onServiceChange(this.props.alt_url);
                        let widget_position = $("#widget-wrapper").offset();
                        widget_position.top -= 20;
                        $("html, body").animate({scrollTop:  widget_position.top});
                    }}>
                        <div>{this.props.alt}</div>
                        <div><b>{this.props.alt_price}</b></div>
                    </div>
                </div>
            </div>
        );
    }
}

class SetMoreWidget extends React.Component {
    render() {
        return(
        <section id="widget-wrapper">
            <iframe scrolling="no" title="SetMore" src={this.props.currentServiceUrl}></iframe>
        </section>);
    }
}


class BookPage extends React.Component {
    componentDidMount() {
        //fade-in animation
        $('.fade-in').each(function(i) {
            $(this).animate({'opacity':'1'}, 1200);
        });

        $(".navbar-item-name:contains('Book Appointment')").each(function(i) {
            $(this).css("color", "black");
        });

        if (this.props.currentServiceUrl !== default_url) {
            let setmore_widget = document.getElementById("widget-wrapper");
            setmore_widget.scrollIntoView();
        }
    }
    componentWillUnmount() {
        $(".navbar-item-name:contains('Book Appointment')").each(function(i) {
            $(this).css("color", "#747474");
        });
        this.props.onServiceChange(default_url);
    }

    render () {
        return (
            <div id="book-page-container">
                <header class="book-page-header">
                    <h5 class="fade-in">Quick·Easy·Affordable</h5>
                    <h1 class="fade-in">Everyday is a good lash day</h1>
                </header>
                
                <section class="price-list-wrapper fade-in">
                    <h3>← Pricing →</h3>
                    <div class="mini-price-list">
                        <ServiceMiniCard name="Classics" 
                                         onServiceChange={this.props.onServiceChange} 
                                         url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/scc8dfb2441b051321b4bf350afd53ad20e8ad430"
                                         alt_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/sf1ad05eabc49737eb01cb1bdcb8b44d876e7da0b"
                                         imgsrc="/assets/images/lashpics/lashpic-classics-alt.png" 
                                         main="Set:" price="$55" alt="Refill:" alt_price="$30"/>
                        <ServiceMiniCard name="Hybrids"
                                         onServiceChange={this.props.onServiceChange}
                                         url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s8251a1ce3dfa4a0c42a18dbb5b2e8af1736d32aa"
                                         alt_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s9e94b8a67e79d6aef979ef4d16e28ac1e3856939"
                                         imgsrc="/assets/images/lashpics/lashpic-hybrid-alt.png" 
                                         main="Set:" price="$65" alt="Refill:" alt_price="$40" />
                        <ServiceMiniCard name="Volumes"
                                         onServiceChange={this.props.onServiceChange}
                                         url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s8444045a60102077d9f4dbe9a730cf76120fdf8c"
                                         alt_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s959b189522291fc784d7a8a5812829eae5c85ba2"
                                         imgsrc="/assets/images/lashpics/lashpic-volumes-alt.png"
                                         main="Set:" price="$75" alt="Refill:" alt_price="$50"/>
                        <ServiceMiniCard name="Mega Volumes"
                                         onServiceChange={this.props.onServiceChange}
                                         url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s88ff4c109de2a1ccaef03884cca3533719da8947"
                                         alt_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/s83d0031305fe2d0e928a13b8e2b1faec60535170"
                                         imgsrc="/assets/images/lashpics/lashpic-mega-alt.jpg" 
                                         main="Set:" price="$85" alt="Refill:" alt_price="$60"/>
                        <ServiceMiniCard name="Lash Lift"
                                         onServiceChange={this.props.onServiceChange}
                                         url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/sa4ed0ebebe9916c4fee10102d55b2bdd66219d70"
                                         alt_url="http://my.setmore.com/bookingpage/b26a0c65-054b-441f-8594-c5b6338ab884/services/sc26f87016e8ec7c1eeaf14a3297e85863e1a9623"
                                         imgsrc="/assets/images/lashpics/lashpic-lift-alt.png" 
                                         main="Lift:" price="$40" alt="Lift & Tint:" alt_price="$45"/>
                    </div>
                    <h4>*Deposits are included in all Service Fees*</h4>
                    <div class="fade-out-cover"></div>
                </section>

                <section class="booking-process">
                    <div class="wrapper float-in">
                        <h3>Instructions</h3>
                        
                        <ol>
                            <li class="step">Book a time below. None of the times work for you? Contact us to find a time that does.</li>
                            <li class="step">Pay the deposit. The prices listed below are just for the deposit.</li>
                            <li class="step">Show up to the address provided in the email 5 minutes prior to your appointment.</li>
                            <li class="step">Get the lashes you've always wanted.</li>
                            <li class="step">Pay the rest of the service cost in cash or e-Transfer.</li>
                        </ol>
                    </div>
                </section>
                
                <h3 class="float-in">Book Now</h3>
                <hr class="fancy"></hr>
                <SetMoreWidget currentServiceUrl={this.props.currentServiceUrl}/>
            </div>
        );
    }
}

export default BookPage;