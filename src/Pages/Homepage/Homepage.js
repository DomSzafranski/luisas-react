import React from "react";
import { Helmet } from "react-helmet";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import { WhatsOn } from "../../Components/WhatsOn/WhatsOn"

export const Homepage = () => {

    const heroImgSrc = require("../../Media/homepage-background-image-large.jpg");
    const heroImgSrcWebP = require("../../Media/homepage-background-image-large.webp");

    return (
        <div>
            <Helmet>
                <title>Luisa's | Italian Restaurant in Radcliffe</title>
                <meta name="description" content="Luisa's Pizzeria in Radcliffe" />
            </Helmet>
            <HeroBanner
                srcWebp = {heroImgSrcWebP}
                fallback={heroImgSrc}
                alt="Luisa's Italian Restaurant in Radcliffe"
            />
            <WhatsOn />
        </div>
    )


}