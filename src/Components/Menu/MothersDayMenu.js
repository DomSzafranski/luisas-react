import React from "react";
import { menuItems } from "./Menus/MothersDayMenu";
import './menu.css';

export const MothersDayMenu = () => {

    return (
        <section className="menuContainer">
            {/* --------menu container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Afternoon Tea - £30 for Two</h2>
                <h3 className="subheadingDescription">
                    Fancy treating your mamma to something a bit different this Mother's day? Book a table for our special Italian Afternoon Tea on Sunday 19th March
                </h3>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "afternoon tea" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>
                
            </div>

            <div className="ctaContainer">
                <h3 className="subheadingDescription">
                    Book your table for Sunday 19th March now
                </h3>
                <a href='https://luisas.resos.com' target='blank'><button className="cta-button">Book a Table</button></a>
            </div>

            {/* --------menu container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Extras</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "extras" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>
                
            </div>

        </section>
    )

}

const MenuItemContainer = props => {
    return (
        <div className="menuItem">
            <h4 className="itemName">{props.item.name}</h4>
            <p className="itemPrice">{props.item.price}</p>
            <p className="itemDescription">{props.item.description}</p>
        </div>
    )
}