import React from "react";
import { Helmet } from "react-helmet";
import './Franchise.css'

export const Franchise = () => {
    return (
        <div className="FranchiseContainer">
            <Helmet>
                <title>Franchise with Luisa's</title>
                <meta name="description" content="Franchise opportunities with Luisa's Italian Restaurant" />
            </Helmet>
            <div className="FranchiseInnerContainer">
                <h2>Franchise opportunities <br />with Luisa's</h2>
                <p>Our franchise program hasn't begun yet, but we're glad to hear that you're interested in working with us.</p>
                <p>If you'd like more information, or would simply like to be kept up to date when more information is available, you can email us at:</p><a href="mailto:franchise@luisas.co.uk">franchise@luisas.co.uk</a>
            </div>
        </div>
    )
}