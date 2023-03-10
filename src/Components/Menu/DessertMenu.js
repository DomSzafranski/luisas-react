import React from "react";
import { Helmet } from "react-helmet";
import { menuItems } from "./Menus/DessertMenu";
import { DietaryBanner } from "./Dietary/DietaryTags";
import './menu.css';

export const DessertMenu = () => {

    return (
        <section className="menuContainer">
            <Helmet>
                <title>Dessert Menu | Luisa's Pizzeria</title>
                <meta name="description" content="Dessert Menu for Luisa's Pizzeria in Radcliffe" />
            </Helmet>
            <div className="categoryContainer">
                <h2 className="categoryName">Dessert</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        <MenuItemContainer item={obj} />
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
                        <p className={styleDietaryTags(tag)}>{tag}</p>
                    ))}
                </div>
            </div>
            <p className="itemPrice">£{props.item.price}</p>
            <p className="itemDescription">{props.item.description}</p>
        </div>
    )
}