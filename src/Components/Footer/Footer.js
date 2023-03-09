import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import { OpeningTimesContainer } from "../Contact Information/Opening Times/OpeningTimesContainer";
import { SignupForm } from "../Newsletter/SignupForm";

export const Footer = () => {


    return (
        <footer>
            <div className="innerFooter">
                {/* Don't render the opening times in the footer if currently on the visit us page */}

                {useLocation().pathname !== '/visit-us' ?
                    <section>
                        <OpeningTimesContainer />
                    </section>
                    : null}
                <section>
                    <SignupForm />
                </section>

            </div>
            <div className="footerNavLinks">
                <ul>
                    {/* <li><Link to='/careers'>Careers</Link></li> */}
                    <li><Link to='/franchise'>Franchise with Luisa's</Link></li>
                    <li><Link to='/privacy-policy'>Privacy Policy</Link></li>

                </ul>
            </div>
        </footer>
    )

}