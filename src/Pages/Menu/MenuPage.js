import React from "react";
import { MenuBanner } from "./MenuBanner";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import './menu.css';


export const MenuPage = () => { 


    const heroImgSrc = require("../../Media/luisas-menu-wide.jpg");

    return (
        <div>
            <MenuBanner
                src={heroImgSrc}
                alt="Luisa's Italian Restaurant Menu"
            />
            <nav className="navLinksContainer">
                <Link to='./'><button className="cta-button">Main Menu</button></Link>
                <Link to='./dessert'><button className="cta-button">Dessert Menu</button></Link>
                <Link to='./bar'><button className="cta-button">Bar Menu</button></Link>
                <Link to='./mothers-day'><button className="cta-button">Mother's Day 2023</button></Link>
            </nav>
            {/* displays the menus based on the url & sub path controlled by buttons above 
            passes the parent state down to each child element*/}
            
                <Outlet />


        </div>
    )
}