import React from 'react';
import { Card, CardImg, CardText, CardSubtitle } from 'reactstrap';

function RenderDrinkMenu({drink}) {
    return (
        <Card>
            <CardImg width="100%" src={drink.image} alt={drink.name}/>
            <CardSubtitle>{drink.price}</CardSubtitle>
            <CardText>{drink.description}</CardText>
        </Card>
    );
}

function Menu(props) {
    const drinkMenu = props.drinks.map(drink => {
        return (
            <div key={drink.id} className="col-md-5 m-1">
                <RenderDrinkMenu drink={drink}/>
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
}

export default Menu; 