import React from 'react';
import { Card, CardImg, CardText, CardSubtitle } from 'reactstrap';

function RenderMenuItem({item}) {
    return (
        <Card>
            <CardImg width="100%" src={item.image} alt={item.name}/>
            <CardSubtitle>{item.price}</CardSubtitle>
            <CardText>{item.description}</CardText>
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
}

export default Menu;