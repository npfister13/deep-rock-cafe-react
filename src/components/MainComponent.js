import React, { Component } from 'react';
// import About from './AboutComponent';
// import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
// import Home from './HomeComponent';
// import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    
    constructor(props) {
        super(props);
        // this.state = {}
    }

    render() {
        
        // const HomePage () => {
        //     return (
        //         <Home />
        //     )
        // }
        return (
            <div>
                <Header />
                <Switch>

                </Switch>
                {/* <Footer /> */}
            </div>
        )
        
    }

    
}

export default Main;