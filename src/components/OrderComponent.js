import React, { Component } from 'react';
import { Card, CardImg, CardText, CardSubtitle, Button, Label } from 'reactstrap';
import Background from './BackgroundComponent';
import OrderButton from './OrderButtonComponent';
import { Control, Form, Errors, Actions } from 'react-redux-form';
import Select from 'react-select';

//this whole page is broken, could not figure out how to make it work using React or reusing old code.

// // this handles the data for all orders
// class EntireOrder extends Component {
    
//     constructor(props){
//         super(props);
//         this.state = {
//             orderList: [],
            
//         }
//     }

//     render () {
//         return (
//             <React.Fragment>
                
//             </React.Fragment>
//         )
//     }
// }

// function MapOrderItems(props) {
//     const drinkItems = props.drinks.map((drink) => { 
//         {value: drink.name, label:}

//     });
// }

// const OrderOptions = () => (
//     <Select options={extras} />
// )



// const extras = [
//     { value: 'whipCream', label: "Whip Cream"},
//     { value: "chocolateSyrup", label: "Chocolate Syrup" },
//     { value: "vanillaSyrup", label: "Vanilla Syrup" },
//     { value: "caramelSyrup", label: "Caramel Syrup" },
//     { value: "chocolateShavings", label: "Chocolate Shavings" },
//     { value: "vanillaPump", label: "Vanilla Pump" },
//     { value: "chocolatePump", label: "Chocolate Pump" },
//     { value: "caramelPump", label: "Caramel Pump" }
// ]


// // this handles the data for individual orders
// class GenerateOrder extends Component {
    
//     constructor(props){
//         super(props);
//         this.state = {
//             drink: '',
//             food: '',
//             temperature: '',
//             snack: '',
//             extras: {
//                 whipCream: false,
//                 chocolateSyrup: false,
//                 vanillaSyrup: false,
//                 caramelSyrup: false,
//                 chocolateShavings: false,
//                 vanillaPump: false,
//                 chocolatePump: false,
//                 caramelPump: false
//             }
//         }
//     }
    
//     render () {
//         return (
//             <div className="col-md-10 offset-1 align-content-center">
//                 <h3>Your Order</h3>
//                 {/* <DrinkOptions /> */}
//                 <OrderOptions />
//             </div>
//         )
//     }
// }

// var i = 0;
// var original = document.getElementById('orderPanelBody');

// function newOrderEntry() {
//     var btn = document.createElement("button");
//     btn.classList.add('btn', 'btn-danger');
//     btn.innerHTML = 'Remove entry';
//     var clone = original.cloneNode(true);
//     clone.id = 'orderPanelBody' + ++i;
//     btn.id = clone.id;
//     btn.onclick = function removeOrderEntry() {
//         var cloneRemove = btn.id;
//         document.getElementById(cloneRemove).remove();
//         original.parentNode.removeChild(btn);
//     }
    
//     original.parentNode.appendChild(clone);
//     clone.parentNode.appendChild(btn);
    
    
// }

// function removeOrderEntry() {
//     var cloneRemove = "orderPanelBody" + i;
//     document.getElementById(cloneRemove).remove();
// }

// function shiftFoodButton(){
//     if (document.getElementById("food").classList.contains("offset-3")){
//         document.getElementById("food").classList.remove("offset-3");
//     };
// }

function Order() {
    return (
        <React.Fragment>
            <div id="orderPanel" className="container-fluid">
                <div className="row"> 
                    <div className="container">
                        <div id="orderPanelBody" className="row row-content align-items-center orderPanelBody d-none d-sm-block">
                            <div className="col-md-10 offset-1 align-content-center">
                                <h3>Your Order</h3>
                                <label for="drinkChoice" className="drink col-md-3">Choose your drink:</label>
                                <label id="temp" for="tempChoice" className="temp col-md-3">Drink temperature:</label>
                                <label id="food" for="foodChoice" className="food col-md-3">Food:</label>
                                <br />
                                <select id="drinkChoice" className="drink btn btn-light col-md-3" name="drink">
                                    <option value="">Select...</option>
                                    <option value="mocha">Mocha</option>
                                    <option value="whiteMocha">White Mocha</option>
                                    <option value="latte">Latte</option>
                                    <option value="coffee">Coffee</option>
                                    <option value="earlGrey">Earl Grey</option>
                                    <option value="londonFog">London Fog</option>
                                </select>
                                <select id="tempChoice" className="temp btn btn-light col-md-3" name="temperature">
                                    <option value="tempHot">Select...</option>
                                    <option value="tempHot">Hot</option>
                                    <option value="tempIced">Iced</option>
                                </select>
                                <select id="foodChoice" className="food btn btn-light col-md-3" name="food">
                                    <option value="">Select...</option>
                                    <option value="bagel">Bagel w/ Cream Cheese</option>
                                    <option value="chocMuffin">Chocolate Chip Muffin</option>
                                    <option value="blueMuffin">Blueberry Muffin</option>
                                    <option value="lemonBread">Lemon Bread</option>
                                    <option value="strawberryPastry">Strawberry-Frosted Toaster Pastry</option>
                                    <option value="blueberryPastry">Blueberry-Frosted Toaster Pastry</option>
                                </select>
                                
                            
                            </div>
                            <div className="col-md-10 offset-1 align-content-center">
                                <label className="col-md-3">Snack:</label>
                                <label className="col-md-3">Extras:</label><br />
                                <select id="snacksId" className="btn btn-light col-md-3 align-top" name="food">
                                    <option value="">Select</option>
                                    <option value="nacho">Nacho Cheese Chips</option>
                                    <option value="coffeeBeans">Chocoolate-Covered Coffee Beans</option>
                                    <option value="applesauce">Chocolate Pudding</option>
                                    <option value="jerky">Fruit Slices</option>
                                    <option value="vegetableSticks">Vegetable Sticks</option>
                                </select>
                                <div id="extras" className="d-inline-block col-md-6 text-justify">
                                    <input type="checkbox" id="whipcream" name="whipcream" value="whipcream" />
                                    <label for="whipcream">Whip Cream</label><br />
                                    <input type="checkbox" id="chocSyrup" name="chocSyrup" value="chocSyrup" />
                                    <label for="chocSyrup">Chocolate Syrup</label>
                                    <input type="checkbox" id="vanSyrup" name="vanSyrup" value="vanSyrup" />
                                    <label for="vanSyrup">Vanilla Syrup</label>
                                    <input type="checkbox" id="carSyrup" name="carSyrup" value="carSyrup" />
                                    <label for="carSyrup">Caramel Syrup</label><br />
                                    <input type="checkbox" id="chocShavings" name="chocShavings" value="chocShavings" />
                                    <label for="chocShavings">Chocolate Shavings</label><br />
                                    <input type="checkbox" id="vanPump" name="vanPump" value="vanPump" />
                                    <label for="vanPump">Vanilla Pump</label>
                                    <input type="checkbox" id="chocPump" name="chocPump" value="chocPump" />
                                    <label for="chocPump">Chocolate Pump</label>
                                    <input type="checkbox" id="carPump" name="carPump" value="carPump" />
                                    <label for="carPump">Caramel Pump</label>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div id="orderPanelBodyExSmall" className="row row-content align-items-center orderPanelBody d-block d-sm-none">
                            <div className="col-md-10 offset-1 align-content-center">
                                <h3>Your Order</h3>
                                <label for="drinkChoice" className="drink col-md-3">Choose your drink:</label>
                                <select id="drinkChoice" className="drink btn btn-light col-md-3" name="drink">
                                    <option value="">Select...</option>
                                    <option value="mocha">Mocha</option>
                                    <option value="whiteMocha">White Mocha</option>
                                    <option value="latte">Latte</option>
                                    <option value="coffee">Coffee</option>
                                    <option value="earlGrey">Earl Grey</option>
                                    <option value="londonFog">London Fog</option>
                                </select>
                                <label id="temp" for="tempChoice" className="temp col-md-3">Drink temperature:</label>
                                <select id="tempChoice" className="temp btn btn-light col-md-3" name="temperature">
                                    <option value="tempHot">Select...</option>
                                    <option value="tempHot">Hot</option>
                                    <option value="tempIced">Iced</option>
                                </select>
                                <label id="food" for="foodChoice" className="food col-md-3">Food:</label>
                                <select id="foodChoice" className="food btn btn-light col-md-3" name="food">
                                    <option value="">Select...</option>
                                    <option value="bagel">Bagel w/ Cream Cheese</option>
                                    <option value="chocMuffin">Chocolate Chip Muffin</option>
                                    <option value="blueMuffin">Blueberry Muffin</option>
                                    <option value="lemonBread">Lemon Bread</option>
                                    <option value="strawberryPastry">Strawberry-Frosted Toaster Pastry</option>
                                    <option value="blueberryPastry">Blueberry-Frosted Toaster Pastry</option>
                                </select>
                            </div>
                            <div className="col-md-10 align-content-center">
                                <label className="col-md-3">Snack:</label>
                                <label className="col-md-3">Extras:</label><br />
                                <select id="snacksId" className="btn btn-light col-md-3 align-top" name="food">
                                    <option value="">Select</option>
                                    <option value="nacho">Nacho Cheese Chips</option>
                                    <option value="coffeeBeans">Chocoolate-Covered Coffee Beans</option>
                                    <option value="applesauce">Chocolate Pudding</option>
                                    <option value="jerky">Fruit Slices</option>
                                    <option value="vegetableSticks">Vegetable Sticks</option>
                                </select>
                                <div id="extras" className="d-inline-block col-md-6 text-justify">
                                    <input type="checkbox" id="whipcream" name="whipcream" value="whipcream" />
                                    <label for="whipcream">Whip Cream</label><br />
                                    <input type="checkbox" id="chocSyrup" name="chocSyrup" value="chocSyrup" />
                                    <label for="chocSyrup">Chocolate Syrup</label>
                                    <input type="checkbox" id="vanSyrup" name="vanSyrup" value="vanSyrup" />
                                    <label for="vanSyrup">Vanilla Syrup</label>
                                    <input type="checkbox" id="carSyrup" name="carSyrup" value="carSyrup" />
                                    <label for="carSyrup">Caramel Syrup</label><br />
                                    <input type="checkbox" id="chocShavings" name="chocShavings" value="chocShavings" />
                                    <label for="chocShavings">Chocolate Shavings</label><br />
                                    <input type="checkbox" id="vanPump" name="vanPump" value="vanPump" />
                                    <label for="vanPump">Vanilla Pump</label>
                                    <input type="checkbox" id="chocPump" name="chocPump" value="chocPump" />
                                    <label for="chocPump">Chocolate Pump</label>
                                    <input type="checkbox" id="carPump" name="carPump" value="carPump" />
                                    <label for="carPump">Caramel Pump</label>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="col-sm-4 offset-8">
                        <button className="btn btn-success" onclick="newOrderEntry()">
                            Add new item
                        </button>
                        <button type="submit" className="btn btn-primary" onClick="window.location.reload()"> Submit </button>
                    </div>
                    
                </div>
                
            </div>

        </React.Fragment>
    )

}

export default Order;
