/**
*Loader component displays a loading spinner and message when data is being fetched.
* @returns {JSX.Element} Loader component
*/

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <p>Loading Questions...</p>
      </div>
    </div>
  )
}