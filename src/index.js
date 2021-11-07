// ****IMPORTS****
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { animateNavBar, floatIn } from './animations';
import setmoreURLs from './setmore-urls';

import HomePage from './page-components/home-page';
import BookPage from './page-components/book-page';
import ContactPage from './page-components/contact-page';

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

// ============= Header ===============

function NavbarItem(props) {
    return (
        <div class="navbar-item">
            <Link to={props.destination} onClick={(e) => document.body.scrollIntoView()} style={{ textDecoration: 'none' }}><span class="navbar-item-name">{props.name}</span></Link>
        </div>
    );
}
class Header extends React.Component {
    componentDidMount() {
        animateNavBar();
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

// ============= Main ===============

class Main extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.getCurrentService = this.getCurrentService.bind(this);
    this.state = {chosenServiceUrl: setmoreURLs.default};
  }

  handleServiceChange(newURL) {
    this.setState({chosenServiceUrl: newURL});
  }

  getCurrentService() {
    return this.state.chosenServiceUrl;
  }

  componentDidMount() {
    floatIn();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/'  render={() => (
          <HomePage onServiceChange={this.handleServiceChange} getCurrentService={this.getCurrentService}/>
        )}/>
        <Route exact path='/appointments'  render={() => (
          <BookPage onServiceChange={this.handleServiceChange} getCurrentService={this.getCurrentService}/>
        )}/>
        <Route exact path='/contact' component={ContactPage}></Route>
      </Switch>
    );
  }
}

// ============= Footer ===============

function Footer(props) {
    return (
        <div id="page-footer">
            <div class="social-media-wrapper">
                <a href="https://www.instagram.com/lashmynxe/">
                    <span style={{display: 'none'}}>Instagram Link</span>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

// *******************************

ReactDOM.render((
  <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
  </BrowserRouter>
  ), document.getElementById('root')
);
