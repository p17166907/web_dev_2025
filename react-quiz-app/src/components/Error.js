import React from 'react';

/**
 * Error component displays an error message when there is a problem fetching data.
 * @returns {JSX.Element} The rendered Error component.
 */
export default function Error() {
  return (
    <p className="error">
      <span>💥</span> There was an error fetching questions.
    </p>
  );
}