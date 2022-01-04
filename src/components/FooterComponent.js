import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col col-sm-3 offset-1" >
                    <ul class="list-unstyled text-center text-white">
                        <li>Hours:</li>
                        <li>Mon-Fri: 6:00 a.m. - 12 a.m.</li>
                        <li>Sat: 7:00 a.m. - 1 a.m.</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
                <div class="col col-sm-3 offset-1">
                    <ul class="list-unstyled text-white">
                        <li>Located at</li>
                        <li>123 S. Main St.</li>
                        <li>Washington, D.C.</li>
                        <li>12345</li>
                    </ul>
                </div>
                <div class="col col-sm-3">
                    <ul class="list-unstyled text-white text-center">
                        <li>Connect with us</li>
                        <i class="fa fa-facebook">&ensp;</i>
                        <i class="fa fa-instagram">&ensp;</i>
                        <i class="fa fa-twitter"></i>
                    </ul>
                </div>
            </div>
        </div>
        

    </footer>
    );
}

export default Footer;