import React from 'react';

/**
 * NextButton component displays a button to move to the next question or finish the quiz.
 * @param {Object} props - The component props.
 * @param {Function} props.dispatch - The function to dispatch actions to the reducer.
 * @param {number | null} props.answer - The currently selected answer index, or null if no answer is selected.
 * @param {number} props.index - The current question index.
 * @param {number} props.numQuestions - The total number of questions in the quiz.
 * @returns {JSX.Element | null} The rendered NextButton component or null if no answer is selected.
 */

export default function NextButton({ dispatch, index, numQuestions }) {
  const handleNextQuestion = () => { dispatch({ type: 'nextQuestion' }) }
  if (index < numQuestions - 1) { return (<button className='btn btn-ui' onClick={handleNextQuestion}>Next</button>) }
}