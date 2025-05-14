import React from 'react';
/**
 * Main component acts as a container for all child components within the application.
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The child components to be rendered inside the Main container.
 * @returns {JSX.Element} The rendered Main component.
 */
function Main({ children }) { return <main className="main">{children}</main>; }

export default Main;