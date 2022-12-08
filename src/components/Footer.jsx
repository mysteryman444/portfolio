import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import './bootstrap.css';
import "./fonts/Montserrat-VariableFont_wght.ttf"

function Footer() {
    return (
        <footer class="footer navigation text">
            <div class="container p-4 pl-0">
                <div class="row footer">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-lg-start">
                        <h4>Thank you for visiting!</h4>
                        <p>made with ❤️ in Providence </p>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-lg-end">
                        <h4></h4>
                        <a href="mailto:johndoe@gmail.com" id="mailbutton" class="btn btn-outline-primary">Contact Me!</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;