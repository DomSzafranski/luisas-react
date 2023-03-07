import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
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
                <div className="footerNavLinks">
                    <ul>
                        <li><Link to='/careers'>Careers</Link></li>
                        <li><Link to='/franchise'>Franchise with Luisa's</Link></li>
                    </ul>
                </div>
            </footer>
        )
    
}