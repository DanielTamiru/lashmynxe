import React from 'react';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';

import HomePage from './page-components/home-page';
import BookPage from './page-components/book-page';
import ContactPage from './page-components/contact-page';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    const default_url = "https://lashmynxe.setmore.com";
    this.state = {chosenServiceUrl: default_url};
  }

  handleServiceChange(newURL) {
    this.setState({chosenServiceUrl: newURL});
  }

  componentDidMount() {
    //float-in animation
    $(window).scroll( function(){
        $('.float-in').each( function(i) {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if(bottom_of_window > top_of_element){
                $(this).animate({opacity: "1"}, {duration: 375, queue: false});
                $(this).animate({top: "0px"}, {duration: 300, queue: false});
            }
        });
    }); 
  }

  render() {
    return (
      <Switch>
        <Route exact path='/'  render={() => (<HomePage onServiceChange={this.handleServiceChange}/>)}/>
        <Route exact path='/appointments'  render={() => (<BookPage currentServiceUrl={this.state.chosenServiceUrl} onServiceChange={this.handleServiceChange}/>)}/>
        <Route exact path='/contact' component={ContactPage}></Route>
      </Switch>
    );
  }
}

export default Main;