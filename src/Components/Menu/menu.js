import React from "react";
import { menuItems } from "./Menus/MainMenu";
import { DietaryBanner, SpicyTag } from "./Dietary/DietaryTags";
import './menu.css';

export const Menu = () => {

    return (
        <section className="menuContainer">
            {/* --------pizza container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Pizza</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "pizza" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>
            {/* --------pasta container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Pasta & Risotto</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "pasta" || obj.category === "risotto" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>

            {/* --------sides container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Side Dishes</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "sides" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>
            <DietaryBanner />
        </section>
    )

}

const MenuItemContainer = props => {

    const styleDietaryTags = tag => {
        switch (tag) {
            case 'V':
                return 'Vegetarian';
            case 'PB': case 'PBA':
                return 'PlantBased';
            case 'N':
                return 'Nuts';
            case 'Spicy':
                return 'Spicy';
            case 'GF':
                return 'GlutenFree';
        }
    }

    return (
        <div className="menuItem">
            <div className="ItemHeader">
                <h4 className="itemName">{props.item.name}</h4>
                <div className="DietaryTags">
                    {props.item.dietary.map(tag => ( //loop through the dietary tags and add each one
                        <p className={styleDietaryTags(tag)}>{tag === 'Spicy' ? <SpicyTag /> : tag}</p>
                    ))}
                </div>
            </div>
            <p className="itemPrice">£{props.item.price}</p>
            <p className="itemDescription">{props.item.description}</p>
        </div>
    )
}