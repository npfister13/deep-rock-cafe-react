import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Order from './OrderComponent';
import { DRINKS } from '../shared/drinks';
import { FOODS } from '../shared/foods';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            drinks: DRINKS,
            foods: FOODS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }
        console.log(this.state.drinks);

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" render={() => <Menu drinks={this.state.drinks} foods={this.state.foods}/> }/>
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact}/>
                    <Route exact path='/order' render={() => <Order drinks={this.state.drinks} foods={this.state.foods} /> } />
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        )
        
    }

    
}

export default Main;