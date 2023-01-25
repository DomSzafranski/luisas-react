import React from "react";
import './SignupForm.css';

export const SignupForm = () => {

    return (
        <form className="signupForm">
            <h3>Sign up to our Newsletter</h3>
            <p className="description">Get the latest Luisa's news, offers, and priority booking for all of our events</p>
            <div className="inputContainer">
                <label for="email">Enter your email address</label>
                <div className="inputField">
                    <input id="email"></input>
                    <button>Submit</button>
                </div>
            </div>
        </form>

    )
}