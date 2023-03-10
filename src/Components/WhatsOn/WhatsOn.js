import { React } from 'react';
import './WhatsOn.css';
import { events } from "./Events";
import { legacy_createStore as createStore } from 'redux';

// REDUX STATE MANAGEMENT ==============================================
const eventsState = events;

// not currently used, but option to create actions to shuffle order of events
// Reducer for events array state
const eventsReducer = (
    state = eventsState,
    action
) => {
    switch (action.type) {
        default:
            return state;
    }
}
const eventStore = createStore(eventsReducer);

//Display conditions actions
const displayImg = pl => {
    return {
        type: 'eventCard/displayImg',
        payload: pl
    }
}
const displayButton = pl => {
    return {
        type: 'eventCard/displayButton',
        payload: pl
    }
}

const displayTag = pl => {
    return {
        type: 'eventCard/displayTag',
        payload: pl //expects bool
    }
}

const localLink = pl => {
    return {
        type: 'eventCard/localLink',
        payload: pl
    }
}


// initialize the initial states
const displayStates = {
    displayImg: true,
    displayButton: true,
    displayTag: true,
    localLink: true
};

//Reducer for the display conditions object
const displayReducer = (
    state = displayStates,
    action
) => {
    switch (action.type) {
        case 'eventCard/displayImg':
            return {
                displayImg: action.payload
            };

        case 'eventCard/displayButton':
            return {
                displayButton: action.payload
            };
        case 'eventCard/displayTag':
            return {
                displayTag: action.payload
            };
        case 'eventCard/localLink':
            return {
                localLink: action.payload
            };

        default:
            return state;
    }
}
const displayStore = createStore(displayReducer);


// REACT COMPONENTS ================================================

// component for the entire What's On section of the homepage
export const WhatsOn = () => {

    const eventsArray = eventStore.getState();

    return (
        <section className="Whats-On-Container">
            <h2>What's on at Luisa's</h2>

            <div className="Whats-On-Events">
                {eventsArray.map(obj => ( //loops through events state and renders from Event component
                    <EventCardContainer event={obj} displayState={displayStore.getState()} />
                    // pass the events array and the display states as props to each event card
                ))}
            </div>

        </section>
    )
}

// container component for the individual event cards
// child of WhatsOn2
const EventCardContainer = props => {

    // update the displayImg state to true/false whether the EventCard has an image or not
    props.event.img.length > 1 ?
        displayStore.dispatch(displayImg(true)) :
        displayStore.dispatch(displayImg(false));

    let displayImgState = displayStore.getState().displayImg;

    // update the displayButton state to true/false if the ButtonText exists
    props.event.buttonText.length > 1 && props.event.buttonPath.length > 1 ?
        displayStore.dispatch(displayButton(true)) :
        displayStore.dispatch(displayButton(false));

    let displayButtonState = displayStore.getState().displayButton;


    // set localLink state to true/false if the button target link is local or external
    props.event.buttonPath.charAt(0) === '/' ?
        displayStore.dispatch(localLink(true)) :
        displayStore.dispatch(localLink(false));

    let localLinkState = displayStore.getState().localLink;

    const todayDate = new Date(); //set today's date as a constant

    // update the displayTag state to true/false if it exists and if the tag date is greater than today
    //Date.parse converts the strings to integers to compare them
    Date.parse(new Date(props.event.tagEndDate)) > Date.parse(todayDate) && props.event.tagName.length > 0 ?
        displayStore.dispatch(displayTag(true)) :
        displayStore.dispatch(displayTag(false));

    let displayTagState = displayStore.getState().displayTag;

    return (
        <EventCard event={props.event} displayImg={displayImgState} displayButton={displayButtonState} displayTag={displayTagState} localLink={localLinkState} />
    )

}

//presentation of event card
// child of EventCardContainer
const EventCard = props => {
    return (
        
        <div className="EventCard">
            {/* if image is available, render the event component */}
            {props.displayImg === true ? <EventCardImg event={props.event} localLink={props.localLink}/> : null}
            <EventDetails event={props.event} displayButton={props.displayButton} localLink={props.localLink} />
        </div>
    )
}

// component for the image on each event card
// child of EventCard
const EventCardImg = props => {
    let target = props.localLink ? '' : '_blank';
    return (
            <a href={props.event.buttonPath} target={target} className="Img-Container">
            {/* link is same as button link */}
            <img
                className="Event-Img"
                src={props.event.img}
                alt={props.event.imgAlt}
            />
            </a>
    )
}

// component for the written details and buttons on each event card
// child of EventCard
const EventDetails = props => {
    //check if an image will be loaded
    let imgAvailable = displayStore.getState().displayImg;

    let className = imgAvailable === true ? 'Event-With-Image' : 'Event-Without-Image';

    let displayTagState = displayStore.getState().displayTag;
    return (
        <div className={className}>
            <div className="eventTitle">
                <h3>{props.event.title}</h3>
                {displayTagState ? <Tag text={props.event.tagName} /> : null}
            </div>
            <date className="date">{props.event.date}</date>
            <p className="Event-Description">{props.event.description}</p>
            {props.displayButton === true ? <EventCardButton event={props.event} localLink={props.localLink}/> : null}
        </div>
    )
}

// component for the CTA button on each event card
// child of EventDetails
const EventCardButton = props => {
    let target = props.localLink ? '' : '_blank';
    return (
        <a href={props.event.buttonPath} target={target}><button>{props.event.buttonText}</button></a>
    )
}

// component for the tag highlight on each event card
// child of EventDetails
const Tag = props => {

    return (
        <span className="tag-element">
            {props.text}
        </span>
    )
}