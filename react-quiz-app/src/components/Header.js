import React from 'react';

/**
* Header component displays the header section of the application with the logo and title
*@returns {JSX.Element} Header component
*/
function Header() {
  return (
    <header className="app-header">
      <img src="logo512.png" alt="React Logo" />
      <h1>The React Quiz</h1>
    </header>
  )
}

export default Header;