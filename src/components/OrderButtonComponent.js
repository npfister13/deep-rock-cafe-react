import React from 'react';
import { Button } from 'reactstrap';

function OrderButton(props){
    return(
        <React.Fragment>
            <div id="orderButton" className="d-flex justify-content-center align-self-center">
                <Button className="btn-dark btn-outline-light" onClick="">
                    ORDER NOW
                </Button>
            </div>
        </React.Fragment>
    )
}

export default OrderButton;