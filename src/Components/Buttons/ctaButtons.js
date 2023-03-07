import React from "react";
import { Link } from "react-router-dom";

export const BookTable = props => {
    return <a href='https://luisas.resos.com' target='blank'><button className="cta-button">{props.buttonText}</button></a>
}

export const OrderOnline = props => {
    return <a href='https://goodeats.io/lcl' target='blank'><button className="cta-button">{props.buttonText}</button></a>
}

export const InternalNav = props => {
    return <Link to={props.path}><button className="cta-button">{props.buttonText}</button></Link>
}

export const ExternalNav = props => {
    return <a href={props.path} target='blank'><button className="cta-button">{props.buttonText}</button></a>
}