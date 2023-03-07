import React from "react";
import { Link } from "react-router-dom";
import './404.css';

export const ErrorPage = () => {
    return (
        <div>
            <header className="ErrorPageHeader">
                <h1>404</h1>
                <h2>This page doesn't exist</h2>
            </header>
            <section className="ErrorPageRedirect">
                <h3>Let's get you back in the right place</h3>
                <p>Maybe one of these buttons can help?</p>
                <div className='buttonsContainer'>
                    <a href='https://luisas.resos.com' target='blank'><button className="cta-button">Book a Table</button></a>
                    <Link to='./menu'><button className="cta-button">View Menu</button></Link>
                    <a href='https://goodeats.io/lcl' target='blank'><button className="cta-button">Order Online</button></a>
                </div>
            </section>
        </div>

    )
}