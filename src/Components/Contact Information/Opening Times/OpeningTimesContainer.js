import React from "react";
import { openingTimes } from "./OpeningTimes";
import './OpeningTimes.css';

export const OpeningTimesContainer = () => {

    const computedOpeningTimes = [];
    openingTimes.map(day => {
        // check if we are open at all
        if (
            day.breakfastStart === 'closed' &&
            day.breakfastEnd === 'closed' &&
            day.lunchStart === 'closed' &&
            day.lunchEnd === 'closed' &&
            day.dinnerStart === 'closed' &&
            day.dinnerEnd === 'closed'
        ) {
            computedOpeningTimes.push(`${day.day}: closed`)
        }



    })

    console.log(computedOpeningTimes);

    return (
        <OpeningTimesPresentation />
    )
}

const OpeningTimesPresentation = props => {
return (
    <div className="openingTimes">
            <h3>Opening Times</h3>
            <table>
                <tr>
                    <td><h4>Tuesday</h4></td>
                    <td><p>17:00 - 22:00</p></td>
                </tr>
                <tr>
                    <td><h4>Wednesday</h4></td>
                    <td><p>17:00 - 22:00</p></td>
                </tr>
                <tr>
                    <td><h4>Thursday</h4></td>
                    <td><p>17:00 - 22:00</p></td>
                </tr>
                <tr>
                    <td><h4>Friday</h4></td>
                    <td><p>17:00 - 22:00</p></td>
                </tr>
                <tr>
                    <td><h4>Saturday</h4></td>
                    <td><p>12:00 - 15:30</p></td>
                </tr>
                <tr>
                    <td><h4>Saturday</h4></td>
                    <td><p>17:00 - 22:00</p></td>
                </tr>
            </table>
        </div>
)
}