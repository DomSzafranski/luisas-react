import React from "react";
import { MenuBanner } from "./MenuBanner";
import { Menu } from "../../Menu/menu";

export const MenuPage = () => {
    const heroImgSrc = require("../../../Media/homepage-background-image-large.jpg");
    return (
        <div>
            <MenuBanner
            src={heroImgSrc}
            alt="Luisa's Italian Restaurant Menu"
        />
            <Menu />
        </div>
    )
}


