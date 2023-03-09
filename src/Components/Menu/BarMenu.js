import React from "react";
import { Helmet } from "react-helmet";
import { menuItems } from "./Menus/BarMenu";
import './menu.css';

export const BarMenu = () => {

    return (
        <section className="menuContainer">
            <Helmet>
                <title>Bar Menu | Luisa's Pizzeria</title>
                <meta name="description" content="Bar Menu for Luisa's Pizzeria in Radcliffe" />
            </Helmet>
            {/* --------red wine container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Red Wine</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "red" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>
            {/* --------white wine container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">White Wine</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "white" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>
            {/* --------rose/prosecco container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Rose & Sparkling</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "rose" || obj.category === "prosecco" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>
            {/* --------beer & cider container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Beer & Cider</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "beer" || obj.category === "cider" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>

            {/* --------soft drinks container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Soft Drinks</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "soft" ? <MenuItemContainer item={obj} /> : null
                        // pass each menu item to build each container
                    ))}
                </div>

            </div>
            {/* --------hot drinks container-------- */}
            <div className="categoryContainer">
                <h2 className="categoryName">Hot Drinks</h2>
                <div className="menuItemContainer">
                    {menuItems.map(obj => ( //loops through menu items and renders from MenuItem component
                        obj.category === "hot" ? <MenuItemContainer item={obj} /> : null
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
            <div className="itemHeader">
                <h4 className="itemName">{props.item.name}</h4>
                <div className="DietaryTags">
                    {props.item.dietary.map(tag => ( //loop through the dietary tags and add each one
                        <p className="measure">{tag}</p>
                    ))}
                </div>
            </div>
            <p className="itemPrice">{props.item.price.length > 0 ? '£' + props.item.price : null}</p>
            <p className="itemDescription">{props.item.description}</p>
        </div >
    )
}