import React, { Component } from 'react';
import { Card, CardImg, CardText, CardSubtitle, Button, Label } from 'reactstrap';
import Background from './BackgroundComponent';
import OrderButton from './OrderButtonComponent';
import { Control, Form, Errors, Actions } from 'react-redux-form';
import Select from 'react-select';


// this handles the data for all orders
class EntireOrder extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            orderList: [],
            
        }
    }

    render () {
        return (
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}

const OrderOptions = () => (
    <Select options={extras} />
)

// const drinks = 

const extras = [
    { value: 'whipCream', label: "Whip Cream"},
    { value: "chocolateSyrup", label: "Chocolate Syrup" },
    { value: "vanillaSyrup", label: "Vanilla Syrup" },
    { value: "caramelSyrup", label: "Caramel Syrup" },
    { value: "chocolateShavings", label: "Chocolate Shavings" },
    { value: "vanillaPump", label: "Vanilla Pump" },
    { value: "chocolatePump", label: "Chocolate Pump" },
    { value: "caramelPump", label: "Caramel Pump" }
]


// this handles the data for individual orders
class GenerateOrder extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            drink: '',
            food: '',
            temperature: '',
            snack: '',
            extras: {
                whipCream: false,
                chocolateSyrup: false,
                vanillaSyrup: false,
                caramelSyrup: false,
                chocolateShavings: false,
                vanillaPump: false,
                chocolatePump: false,
                caramelPump: false
            }
        }
    }
    
    render () {
        return (
            <div className="col-md-10 offset-1 align-content-center">
                <h3>Your Order</h3>
                <OrderOptions />
            </div>
        )
    }
}

function Order() {
    return (
        <React.Fragment>
            <Background />
            <OrderButton />

            <div className="container-fluid" id="orderPanel">
                <div className="row">
                    <div className="container">
                        <div className="row row-content align-items-center d-none d-sm-block">
                            <GenerateOrder />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}

export default Order;
