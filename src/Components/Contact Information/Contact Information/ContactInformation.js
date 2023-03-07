import React from "react";
import './ContactInformation.css';

export const PhoneNumber = () => {
    return (
            <div className="ContactInfo">
                <div className="Phone">
                    <h3>Phone</h3>
                    <p>Call the restaurant on <a>0161 523 2527</a></p>
                </div>
            </div>
    )
}

export const EmailAddress = () => {
    return (
            <div className="ContactInfo">
                <div className="Email">
                    <h3>Email</h3>
                    <p>For general enquiries, please email us at <a href="mailto:hello@luisas.co.uk">hello@luisas.co.uk</a></p>
                    <p>For bookings, you can <a href="https://luisas.resos.com" target="_blank">book online</a>, or email us at <a href="mailto:bookings@luisas.co.uk">bookings@luisas.co.uk</a></p>
                </div>
            </div>
    )
}