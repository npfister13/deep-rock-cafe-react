import React from "react";

function Contact() {
    return (
        <React.Fragment>
            <div id="infoPanel" className="container-fluid">
                <div className="row">
                    <div className="container">
                        <form id="contactForm" name="contactForm" action="" method="">
                            <div id="infoPanelBody" className="row row-content align-items-center">
                                <div className="col-sm-6">
                                    <img id="homeProduct1" className="d-flex img-thumbnail img-fluid" src="assets/coffee-shop-indoor.jpg" alt=""/>
                                </div>
                                <div className="col-sm-6">
                                    <p>Questions? Feedback? Food or drink suggestions? Send us an email or join us in person!</p>
                                </div>
                                <div id="yourName" className="col-sm-6">
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Name" />
                                    <label for="name">Your Name</label>
                                    <small id="emailTip" className="form-text text-muted"></small>
                                </div>
                                <div id="yourEmail" className="col-sm-6">
                                    <input type="text" id="email" name="email" className="form-control" placeholder="example@email.com" />
                                    <label for="email">Your Email</label>
                                </div>
                                <div id="yourMessage" className="col-12">
                                    <input type="text" id="message" name="message" className="form-control" placeholder="Start typing!" />
                                    <label for="message">Your Message</label>
                                </div>
                                <button type="submit" className="col-sm-8 offset-sm-2 btn btn-dark">Send</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;