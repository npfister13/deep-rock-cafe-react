import React from 'react';
import OrderButton from './OrderButtonComponent';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Col, Row, Media } from 'reactstrap';
import Background from './BackgroundComponent';

function Home() {
    return (
        <React.Fragment>
            <Background/>

            <OrderButton />

            <div id="infoPanel" className="container-fluid">
                <Row>
                    <Container>
                        <Row id="infoPanelBody" className="align-items-center">
                            <Col sm={6}>
                                <img id="homeProduct1" className="d-flex img-thumbnail img-fluid" src="assets/coffee-stock-photo-01.jpg" alt=""/>
                            </Col>
                            <Col sm={6}>
                                <Media>
                                    <Media body className="align-self-center">
                                        <p className="d-none d-sm-block">Our coffee at Deep Rock Café is taken from the ancestrial family line of coffee that traces back all the way to the Ethiopian plateau, where coffee beans were first found. We then lightly roast our beans to create an excellent toasty taste that makes you crave more. All of our coffee is crafted with passion and love.</p>
                                        <p className="d-block d-sm-none">Our coffee is taken straight from the ancient coffee beans from the Ethiopian plateau and light roasted to perfection.</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={6}>
                                <Media>
                                    <Media body className="align-self-center">
                                        <p className="d-none d-sm-block">We offer many types of coffee and always aim to make it to your desires. If you have an idea in mind to make your coffee your way, our brewistas can make exactly what you'd like. Just tell them the ingredients and they will perfect it for you.</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={6}>
                                <img id="homeProduct2" className="d-flex img-thumbnail img-fluid" src="assets/coffee-stock-photo-03.jpg" alt=""/>
                            </Col>
                            <Col sm={6}>
                                <Media>
                                    <Media body className="align-self-center">
                                        <p className="d-block d-sm-none">Our brewistas know exactly how to make your coffee your way, just let them know your combination and they'll perfect it.</p>
                                    </Media>
                                </Media>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Home;