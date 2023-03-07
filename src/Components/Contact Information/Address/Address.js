import React from "react";
import { ExternalNav } from "../../Buttons/ctaButtons";
import './Address.css';

export const Address = () => {
    return (
        <div classname="AddressContainer">
            <address className="address">
            <h3>Address</h3>
                <p>45 Church Street West</p>
                <p>Radcliffe, Greater Manchester</p>
                <p>M26 2SP</p>
                <ExternalNav path="https://goo.gl/maps/y6Nwv5GpWNjP2G5d9" buttonText="View on Google Maps"/>
            </address>
        </div>
    )
}