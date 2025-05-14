import React from "react";

/**
 * Timer component to display countdown time in minutes and seconds.
 * The timer decrements every second and updates based on the `secondsRemaining` state.
 * @param {Object} props - The component props.
 * @param {Function} props.dispatch - The dispatch function to send actions to the reducer.
 * @param {number} props.secondsRemaining - The remaining time in seconds to be displayed.
 * @returns {JSX.Element} The rendered Timer component.
 */
export default function Timer() {
  return (
    <div className="timer">
      mins:seconds
    </div>)
}