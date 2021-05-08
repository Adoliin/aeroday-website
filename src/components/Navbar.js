import React from "react";
import {Component} from "react/cjs/react.production.min";
import "../App.css";
import $ from 'jquery';

class Navbar extends Component {

    componentDidMount() {
        var navItem = $(".nav-items")
        var logo = $('.logo img')
        const minwidth = window.$MIN_WIDTH;
        console.log(navItem.width())
        $(window).scroll(function (){
            //if($(window).width() >= minwidth) {
                if ($(window).scrollTop() >= 200) {
                    $('.navbar').addClass('smaller')
                    logo.attr('src', logo.attr('src').replace('White', 'Black'))
                } else {
                    logo.attr('src', logo.attr('src').replace('Black', 'White'))
                    $('.navbar').removeClass('smaller')
                }
            // }
            // else {
            //     console.log('minwidth ', minwidth)
            // }
        })
    }

    render() {
        const brandStyle = {
            height: "50px",
        }

        return (
            <>
                <div className="navbar">
                    <a href="/" className={"logo"}><img src={process.env.PUBLIC_URL + "/assests/images/LogoWhite.png"}
                                                        alt="aeroday logo" style={brandStyle}/></a>
                    <div className="nav-items">
                        <ul>
                            <li className={"nav-item"} id={"home"}><a href="/">Acceuil</a></li>
                            <li className={"nav-item"} id={"axes"}><a href="/#axes&challenges">Axes & Challenges</a></li>
                            <li className={"nav-item"} id={"about"}><a href="/about">A Propos De Nous</a></li>
                            <li className={"nav-item"} id={"contact"}><a href="/contact">Contact Us</a></li>
                        </ul>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ☰
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/">Acceuil</a>
                                <a className="dropdown-item" href="/#axes&challenges">Axes & Challenges</a>
                                <a className="dropdown-item" href="/about">A Propos De Nous</a>
                                <a className="dropdown-item" href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar