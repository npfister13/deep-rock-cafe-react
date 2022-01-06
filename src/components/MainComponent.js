import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { addComment}

const mapStateToProps = state => {
    return{
        foods: state.foods,
        drinks: state.drinks
    }
}


class Main extends Component {
    

    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" render={() => <Menu drinks={this.props.drinks}/> } />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        )
        
    }

    
}

export default Main;