import React from "react";
import { Helmet } from "react-helmet";
import { menuItems } from "./Menus/MothersDayMenu";
import { DietaryBanner, SpicyTag } from "./Dietary/DietaryTags";
import './menu.css';

export const MothersDayMenu = () => {

    return (
        <section className="menuContainer">
            <Helmet>
                <title>Mother's Day Menu | Luisa's Pizzeria</title>
                <meta name="description" content="Mother's Day Menu for Luisa's Pizzeria in Radcliffe" />
            </Helmet>
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
            default:
                return ''
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
            <p className="itemPrice">{props.item.price}</p>
            <p className="itemDescription">{props.item.description}</p>
        </div>
    )
}