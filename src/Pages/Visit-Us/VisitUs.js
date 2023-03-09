import React from "react";
import { Helmet } from "react-helmet";
import './VisitUs.css';
import { PhoneNumber, EmailAddress } from "../../Components/Contact Information/Contact Information/ContactInformation";
import { Address } from "../../Components/Contact Information/Address/Address";
import { Parking } from "../../Components/Contact Information/Parking/Parking";
import { OpeningTimesContainer } from "../../Components/Contact Information/Opening Times/OpeningTimesContainer";


export const VisitUs = () => {
    return (
        <div className="VisitUsContainer">
            <Helmet>
                <title>Visit Luisa's Italian in Radcliffe</title>
                <meta name="description" content="Luisa's Radcliffe Address, Opening Hours, and Contact Information" />
            </Helmet>
            <div className="MainContainer">
                <div className="ContactInformation">
                    <section>
                        <PhoneNumber />
                        <EmailAddress />
                    </section>
                    <section>
                        <Address />
                    </section>
                    <section>
                        <Parking />
                    </section>
                    <section>
                        <OpeningTimesContainer />
                    </section>
                </div>
            </div>
        </div>
    )
}