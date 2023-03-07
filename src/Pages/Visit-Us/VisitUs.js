import React from "react";
import './VisitUs.css';
import { Address } from "../../Components/Contact Information/Address/Address";
import { OpeningTimesContainer } from "../../Components/Contact Information/Opening Times/OpeningTimesContainer";

export const VisitUs = () => {
    return (
        <div className="VisitUsContainer">
            <header>
                <h3 className="HeaderTitle">Plan your next visit to Luisa's</h3>
            </header>
            <div className="MainContainer">
                <div className="ContactInformation">
                    <section>
                        <Address />
                    </section>
                    <section>
                        <OpeningTimesContainer />
                    </section>
                </div>
                <div className="ContactForm">
                    
                </div>
            </div>
        </div>
    )
}