import React from 'react';
import $ from 'jquery';

function ContactItem(props) {
    return(
        <div class="info-item">
            <div>{props.icon}</div>
            <h6>{props.data}</h6>
            <p>{props.description}</p>
        </div>
    );
}
function ContactItemSeperator(props) {
    return (<div class="info-item-gap"><div class="item-bridge"></div></div>);
}

class ContactPage extends React.Component {
    componentDidMount() {
        //fade-in animation
        $('.fade-in').each(function(i) {
            $(this).animate({'opacity':'1'}, 1200);
        });

        $(".navbar-item-name:contains('Contact')").each(function(i) {
            $(this).css("color", "black");
        });
    }
    componentWillUnmount() {
        $(".navbar-item-name:contains('Contact')").each(function(i) {
            $(this).css("color", "#747474");
        });
    }

    render () {
        return (
            <div id="contact-page-container">
                <section class="banner">
                    <div class="banner-content fade-in">
                        <h1>Get in touch</h1>
                        <h5>We'd love to hear from you</h5>
                    </div>
                </section>
                <section class="contact-info fade-in">
                    <ContactItem icon={<i class="fa fa-phone" aria-hidden="true"></i>} 
                                 data="+1 (416) 985-2443"
                                 description="Have questions? Call or message us! We'll get back to you ASAP"/>
                    <ContactItemSeperator/>
                    <ContactItem icon={<i class="fa fa-envelope" aria-hidden="true"></i>} 
                                 data="maryandres1115@gmail.com"
                                 description="Email us your questions and feedback! Your input is very valuable to us"/>
                    <ContactItemSeperator/>
                    <ContactItem icon={<i class="fa fa-home" aria-hidden="true"></i>} 
                                 data="Brampton, ON"
                                 description="For privacy reasons, our location is not revealed until you book an appointment"/>
                </section>
            </div>
        );
    }
}

export default ContactPage;