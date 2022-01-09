import React from 'react';
import { Card, CardImg, CardText, CardSubtitle } from 'reactstrap';
import OrderButton from './OrderButtonComponent';
import Background from './BackgroundComponent';

function RenderDrinkMenu({drink}) {
    return (
        <React.Fragment>
            <td className="col-6"><img src={drink.image} alt={drink.description} /></td>
            <td className="col-6">
                <h3>{drink.name} - {drink.price}</h3><p>{drink.description}</p>
            </td>
        </React.Fragment>
    );
}

function RenderFoodMenu({food}) {
    return (
        <React.Fragment>
            <td className="col-6"><img src={food.image} alt={food.description} /></td>
            <td className="col-6 align-items-center">
                <h3>{food.name} - {food.price}</h3><br /><p>{food.description}</p>
            </td>
        </React.Fragment>
    );
}

function Menu(props) {

    const drinkMenu = props.drinks.map(drink => {
        return (
            <div key={drink.id} className="col-md-6 p-0">
                <RenderDrinkMenu drink={drink}/>
            </div>
        );
    });

    
    const foodMenu = props.foods.map(food => {
        return (
            <div key={food.id} className="col-md-6 p-0">
                <RenderFoodMenu food={food}/>
            </div>
        );
    });

    return (
        <div className="container-fluid m-0 pl-0 pr-0">
            <Background />
            <OrderButton />
            <div id="menuPanel">
                <div className="row m-0">
                    <div className='container'>
                        <div id="menuPanelBody" className='row row-content align-items-center'>
                            <table className="table">
                                <tbody className="thead container">
                                    <tr>
                                        <th className="text-center" colSpan={2}>Drinks</th>
                                    </tr>
                                    <tr className="row tableBackground" colSpan={2}>{drinkMenu}</tr>
                                    <tr>
                                        <th className="text-center" colSpan={2}>Food</th>
                                    </tr>
                                    <tr className='row tableBackground'>{foodMenu}</tr>
                                    <tr>
                                        <th className="text-center" colSpan={2}>Snacks</th>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <ul class="list-unstyled text-center">
                                                <li>Nacho Cheese Chips</li>
                                                <li>Chocolate Pudding</li>
                                                <li>Fruit Slices</li>
                                                <li>Veggies Sticks</li>
                                                <li>Chocolate Coffee Beans</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-center" colSpan={2}>Extras</th>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <ul class="list-unstyled text-center">
                                                <li><b>Flavor Pumps</b></li>
                                                <li> Vanilla, Chocolate, Caramel, Pumpkin</li>
                                                <li><b>Toppings</b></li>
                                                <li>Chocolate Shavings, Chocolate Syrup,<br /> Caramel Syrup, Vanilla Syrup,<br /> Whip Cream</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <React.Fragment>
    //         <Background />
    //         <OrderButton />
    //         <div id="menuPanel" className="container-fluid">
    //             <div className="row">
    //                 <div className="container">
    //                     <div id="menuPanelBody" className="row row-content align-items-center">
    //                         <table className="table">
    //                             <tbody className="thead">
    //                                 <tr>
    //                                     <th className="text-center" colSpan={2}>Drinks</th>
    //                                 </tr>
    //                                 <tr className="row tableBackground">{drinkMenu}</tr>
    //                                 <tr>
    //                                     <th className="text-center" colSpan={2}>Food</th>
    //                                 </tr>
    //                                 <tr className="row tableBackground">{foodMenu}</tr>
    //                             </tbody>
    //                         </table>

                            
    //                     </div>
    //                 </div>
                    
    //             </div>
    //         </div>
    //     </React.Fragment>
    // );

    // return ( 
    //     <React.Fragment>
    //         <Background />
    //         <OrderButton />
    //         <div id="menuPanel" className="container-fluid">
    //             <div className="row">
    //                 <div className="container">
    //                     <div id="menuPanelBody" className="row row-content align-items-center">
    //                         <table className="table">
    //                             <tbody className="thead">
    //                                 <tr>
    //                                     <th className="text-center" colspan="4">Drinks</th>
    //                                 </tr>
    //                                 <tr> 
    //                                     <td className="col-1 col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td className="col-1 col-sm-3">
    //                                         <h3>Mocha - $5</h3><br />Lorem ipsum dolor sit amet. In a nisl eu justo bibendum tempus. Donec.
    //                                     </td>
    //                                     <td className="col-1 col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td className="col-1 col-sm-3">
    //                                         <h3>White Mocha - $5</h3>
    //                                         <p className="ownerFav">* Owner favorite!</p>
    //                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a nisl eu justo bibendum tempus. Donec.

    //                                     </td>
    //                                 </tr>
    //                                 <tr> 
    //                                     <td className="col-1 col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Latte - $4</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //                                     </td>
    //                                     <td className="col-1 col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Coffee - $2</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.
    //                                     </td>
    //                                 </tr>
    //                                 <tr> 
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>London Fog - $5</h3>
    //                                         <p className="ownerFav">* Owner favorite!</p>
    //                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, auctor.

    //                                     </td>
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Earl Grey - $3</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien.
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th className="text-center" colspan="4">Food</th>
    //                                 </tr>
    //                                 <tr> 
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Bagel w/ Cream Cheese - $3.50</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing.
    //                                     </td>
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Chocolate Chip Muffin - $3</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing.
    //                                     </td>
    //                                 </tr>
    //                                 <tr> 
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Blueberry Muffin - $3</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing.
    //                                     </td>
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Lemon Bread - $3.75</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing.
    //                                     </td>
    //                                 </tr>
    //                                 <tr> 
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Strawberry-Frosted Toaster Pastry - $5</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing.
    //                                     </td>
    //                                     <td className="col-sm-3"><img src="assets/coffee-stock-photo-01.jpg" className="img-fluid"/> </td>
    //                                     <td>
    //                                         <h3>Blueberry-Frosted Toaster Pastry - $5</h3><br />Lorem ipsum dolor sit amet, consectetur adipiscing.
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th className="text-center" colspan="2">Snacks</th>
    //                                     <th className="text-center" colspan="2">Extras</th>
    //                                 </tr>
    //                                 <tr>
    //                                     <td colspan="2">
    //                                         <ul className="list-unstyled text-center">
    //                                             <li>Nacho Cheese Chips</li>
    //                                             <li>Chocolate Pudding</li>
    //                                             <li>Fruit Slices</li>
    //                                             <li>Veggies Sticks</li>
    //                                             <li>Chocolate Coffee Beans</li>
    //                                         </ul>
    //                                     </td>
    //                                     <td colspan="2">
    //                                         <ul className="list-unstyled text-center">
    //                                             <li><b>Flavor Pumps</b></li>
    //                                             <li> Vanilla, Chocolate, Caramel, Pumpkin</li>
    //                                             <li><b>Toppings</b></li>
    //                                             <li>Chocolate Shavings, Chocolate Syrup,<br /> Caramel Syrup, Vanilla Syrup,<br /> Whip Cream</li>
    //                                         </ul>
    //                                     </td>
    //                                 </tr>
    //                             </tbody>
    //                         </table>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </React.Fragment>
    // );
}

export default Menu;