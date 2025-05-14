import React from 'react';

/**
 * Progress component displays the current progress of the quiz.
 * 
 * @param {Object} props - The component props.
 * @param {number} props.index - The current question index.
 * @param {number} props.numQuestions - The total number of questions in the quiz.
 * @param {number} props.points - The current score of the user.
 * @param {number} props.maxPossiblePoints - The maximum possible points for the quiz.
 * @param {number | null} props.answer - The currently selected answer index, or null if no answer is selected.
 * 
 * @returns {JSX.Element} The rendered Progress component.
 */

export default function Progress({ numQuestions, index, maxPossiblePoints, points, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer != null)}></progress>
      <p>Question <strong>{index + 1}</strong>/{numQuestions} </p>
      <strong>Points: <strong>{points} </strong> / {maxPossiblePoints}</strong>
    </header>
  )
}