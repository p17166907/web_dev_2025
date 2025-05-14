import React from 'react';

/**
 * StartScreen component displays the welcome message and start button.
 * @param {Object} props - The component props.
 * @param {number} props.numQuestions - The number of questions in the quiz.
 * @param {Function} props.dispatch - The function to dispatch actions to the reducer.
 * @returns {JSX.Element} The rendered StartScreen component.
 */


export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} Questions To Test Your React Mastery</h3>
      <button className='btn btn-ui' onClick={() => { dispatch({ type: 'start' }) }}>Let's Start</button>
    </div>)
}