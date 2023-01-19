import React from "react";
import { HeroBanner } from "../../HeroBanner/HeroBanner";
import { WhatsOn } from "../../WhatsOn/WhatsOn";

export const Homepage = () => {

    const heroImgSrc = require("../../../Media/homepage-background-image-large.jpg");
    return (
        <div>
        <HeroBanner
            src={heroImgSrc}
            alt="Luisa's Italian Restaurant in Radcliffe"
        />
        <WhatsOn />
        </div>
    )


}