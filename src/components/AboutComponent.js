import React from "react";
import Background from "./BackgroundComponent";
import OrderButton from "./OrderButtonComponent";

function About() {
    return (
        <React.Fragment>

            <Background />
            <OrderButton />

            <div id="infoPanel" className="container-fluid">
                <div className="row">
                    <div className="container">
                        <div id="infoPanelBody" className="row row-content align-items-center">
                            <div className="col-sm-8 offset-sm-2">
                                <img id="homeProduct1" className="d-flex img-thumbnail img-fluid" src="assets/cafe-baristas-2.jpeg" alt=""/>
                            </div>
                            <div className="col-10 offset-1">
                                <div className="media">
                                    <div className="media-body align-content-center">
                                        <p className="d-none d-sm-block"><h3 className="text-center"><b>We've been interested in coffee since our first sip.</b></h3>The rich aroma and smooth taste can be perfected with love and patience, which is what we do here at Deep Rock Café. Come in and try any of our masterfully crafted coffees, made by the people who enjoy it the most. Our owner favorites are the White Mocha and London Fog.   </p>
                                        <p className="d-block d-sm-none">Coffee was love at first sight for us. We craft each coffee with love and patience, perfecting our favorite drinks for years. Come join us for a cup.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;