import {React} from 'react';
import './WhatsOn.css';
import { events } from "./Events";

export const WhatsOn = () => {

    return (
        <section className="Whats-On-Container">
            <h2>What's on at Luisa's</h2>

            <div className="Whats-On-Events">
                {events.map(item => ( //loops through events object and renders from Event component
                    <Event event={item} />
                ))}
            </div>

        </section>
    )
}

const Event = props => { //renders a single event passed in through prop

    return (
        <div className="Event">
            <EventImage event={props.event}/>
            <EventDetails event={props.event} />
        </div>
    )
};

const EventImage = props => {
    return (
        <div className="Img-Container">
            <img
                className="Event-Img"
                src={props.event.img}
                alt={props.event.imgAlt}
            />
        </div>
    )
}

const EventDetails = props => {

    return (
        <div className="Event-Details">
            <h3>{props.event.title}</h3>
            <p className="Event-Description">{props.event.description}</p>
            <p className="Event-Tagline">{props.event.tagline}</p>
            {props.event.buttonText.length > 0 ? <EventCTAButton event={props.event} /> : null}
        </div>
    )
}

const EventCTAButton = props => {
    return (
        <button>{props.event.buttonText}</button>
    )
}