import React from 'react';
/**
 * Options component displays multiple choice options for a given question.
 * @param {Object} props - The component props.
 * @param {Object} props.questionsArr - The current question object containing options and the correct answer.
 * @param {Function} props.dispatch - The function to dispatch actions to the reducer.
 * @param {number | null} props.answer - The currently selected answer index, or null if no answer is selected.
 * @returns {JSX.Element} The rendered Options component.
 */

export default function Options({ questionsArr, dispatch, answer }) {
  // Check if the user has answered the question
  const hasAnswered = answer !== null;

  // Function to handle option button click
  const handleOptionClick = (index) => { dispatch({ type: 'newAnswer', payload: index }); }

  return (
    <div>
      <div className='options'>
        {questionsArr.options.map((option, index) => {
          // Determine classes for button styling
          const isAnswer = (index === answer)
          const isCorrect = (index === questionsArr.correctOption)
          const buttonClasses = `btn btn-option ${isAnswer ? "answer" : ""} ${hasAnswered ? (isCorrect ? "correct" : "wrong") : ""}`.trim(); // Use .trim() to remove excess spaces          
          return (
            <button
              key={option}
              className={buttonClasses}
              disabled={hasAnswered}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}