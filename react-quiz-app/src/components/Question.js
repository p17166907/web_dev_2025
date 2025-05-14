import React from 'react';
import Options from './Options';
/**
 * Question component displays the current question and its options.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.questionsArr - The current question object containing the question and options.
 * @param {Function} props.dispatch - The function to dispatch actions to the reducer.
 * @param {number | null} props.answer - The currently selected answer index, or null if no answer is selected.
 * 
 * @returns {JSX.Element} The rendered Question component.
 */

export default function Question({ questionsArr, dispatch, answer }) {
  return (
    <div>
      <h4>{questionsArr.question}</h4>
      <Options questionsArr={questionsArr} dispatch={dispatch} answer={answer} />
    </div>
  )
}