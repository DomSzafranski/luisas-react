import React from "react";
import "./Footer.css";
import { OpeningTimesContainer } from "../Contact Information/Opening Times/OpeningTimesContainer";
import { SignupForm } from "../Newsletter/SignupForm";

export const Footer = () => {


        return (
            <footer>
                <div className="innerFooter">
                    <section>
                        <OpeningTimesContainer />
                    </section>
                    <section>
                        <SignupForm />
                    </section>

                </div>
            </footer>
        )
    
}