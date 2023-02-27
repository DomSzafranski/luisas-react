import React from "react";
import './SignupForm.css';

export const SignupForm = () => {

    return (
        <div className="signupForm">
            <h3>Sign up to our Newsletter</h3>
            <p className="description">Get the latest Luisa's news, offers, and priority booking for all of our events</p>
            <div className="inputContainer">
                {/* <label for="email">Enter your email address</label> */}
                <div className="inputField">
                    {/* <input id="email"></input> */}
                    <a href='https://mailchi.mp/fc1f711f89bb/sign-up-to-our-newsletter' target='blank'><button>Signup</button></a>
                </div>
            </div>
        </div>

    )
}