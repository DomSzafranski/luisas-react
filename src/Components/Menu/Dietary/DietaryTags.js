import React from "react";
import './DietaryTags.css';

export const DietaryBanner = () => {
    return ( 
        <div className="DietaryBanner">
            <SpicyTag /><p className="Spicy">- Spicy</p>
            <p className="Nuts">N - Contains Nuts</p>
            <p className="Vegetarian">V - Vegetarian</p>
            <p className="PlantBased">PB - Plant Based / PBA - Plant Based Available</p>
            <p className="GlutenFree">GF - Gluten Free / GFA - Gluten Free Available</p>
        </div>
    )
}

export const SpicyTag = () => {
    return (
        <span className="SpicyTag"></span>
    )
}