import React from 'react';
import { fadeIn, greyOutNavBarItem, highlightNavBarItem, scrollToSetMoreWidget } from '../animations';
import setmoreURLs from '../setmore-urls';

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
                    <div class="price-box" onClick={() => {
                        this.props.onServiceChange(this.props.url);
                        scrollToSetMoreWidget();
                    }}>
                        <div>{this.props.main}</div>
                        <div class="price"><b>{this.props.price}</b></div>
                    </div>
    
                    <hr></hr>

                    <div class="price-box" onClick={(e) => {
                        this.props.onServiceChange(this.props.alt_url);
                        scrollToSetMoreWidget();
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
        fadeIn();
        highlightNavBarItem("Book Appointment");

        if (this.props.getCurrentService() !== setmoreURLs.default) {
            scrollToSetMoreWidget();
        }
    }
    componentWillUnmount() {
        greyOutNavBarItem("Book Appointment")
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
                                         url={setmoreURLs.classics.full}
                                         alt_url={setmoreURLs.classics.refill}
                                         imgsrc="/assets/images/lashpics/lashpic-classics-alt.png" 
                                         main="Set:" price="$55" alt="Refill:" alt_price="$30"/>
                        <ServiceMiniCard name="Hybrids"
                                         onServiceChange={this.props.onServiceChange}
                                         url={setmoreURLs.hybrids.full}
                                         alt_url={setmoreURLs.hybrids.refill}
                                         imgsrc="/assets/images/lashpics/lashpic-hybrid-alt.png" 
                                         main="Set:" price="$65" alt="Refill:" alt_price="$40" />
                        <ServiceMiniCard name="Volumes"
                                         onServiceChange={this.props.onServiceChange}
                                         url={setmoreURLs.volumes.full}
                                         alt_url={setmoreURLs.volumes.refill}
                                         imgsrc="/assets/images/lashpics/lashpic-volumes-alt.png"
                                         main="Set:" price="$75" alt="Refill:" alt_price="$50"/>
                        <ServiceMiniCard name="Mega Volumes"
                                         onServiceChange={this.props.onServiceChange}
                                         url={setmoreURLs.megaVolumes.full}
                                         alt_url={setmoreURLs.megaVolumes.refill}
                                         imgsrc="/assets/images/lashpics/lashpic-mega-alt.jpg" 
                                         main="Set:" price="$85" alt="Refill:" alt_price="$60"/>
                        <ServiceMiniCard name="Lash Lift"
                                         onServiceChange={this.props.onServiceChange}
                                         url={setmoreURLs.lashLift.regular}
                                         alt_url={setmoreURLs.lashLift.withTint}
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
                <SetMoreWidget currentServiceUrl={this.props.getCurrentService()}/>
            </div>
        );
    }
}

export default BookPage;