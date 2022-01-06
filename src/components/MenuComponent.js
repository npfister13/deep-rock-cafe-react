import React from 'react';
import { Card, CardImg, CardText, CardSubtitle } from 'reactstrap';
import OrderButton from './OrderButtonComponent';
import Background from './BackgroundComponent';

function RenderMenuItem({ drink }) {
    return (
        <Card>
            <CardImg width="100%" src={ drink.image} alt={ drink.name}/>
            <CardSubtitle>{ drink.price}</CardSubtitle>
            <CardText>{ drink.description}</CardText>
        </Card>
    );
}

function Menu(props) {

    const drinkMenu = props.drinks.map(drink => {
        return (
            <div key={drink.id} className="col-md-5 m-1">
                <RenderMenuItem drink={drink}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {drinkMenu}
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