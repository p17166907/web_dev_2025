
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import NextButton from "./components/NextButton";

const SECS_PER_QUESTION = 30;

// Define initial state for the application
const initialState = {
  questionsArr: [],
  status: "loading", // Possible statuses: "loading", "error", "ready", "active", "finished"
  index: 0,
  points: 0,
  answer: null,
  secondsRemaining: null,

};
/**
 * Reducer function to manage the state updates based on dispatched actions.
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object containing the type and payload.
 * @returns {Object} The updated state based on the action type.
 */
const reducer = (state, action) => {
  switch (action.type) {
    // case action type is "dataReceived", update: questionsArr with the data from the server, update status to "ready"
    case "dataReceived": return { ...state, questionsArr: action.payload, status: "ready" };
    // case action type is "dataFailed", Set status to "error" if data fetching failed
    case "dataFailed": return { ...state, status: "error" };
    // Set status to "active" when quiz starts
    case "start": return { ...state, status: "active", secondsRemaining: state.questionsArr.length * SECS_PER_QUESTION };
    // Update answer and calculate points based on the correct answer
    case "newAnswer":
      const currentQuestion = state.questionsArr[state.index];
      return { ...state, answer: action.payload, points: (action.payload === currentQuestion.correctOption) ? (state.points + currentQuestion.points) : (state.points), };
    // Move to the next question and reset the answer state
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    // case "tick": return { ...state, secondsRemaining: state.secondsRemaining - 1, status: state.secondsRemaining === 0 ? "finished" : state.status, };
    default: return state;
  }
}

function App() {
  // Use the useReducer hook to manage the application state
  // "dispatch" - function to send actions that describe how to update the state
  // "reducer" -  a function to manage the state updates based on dispatched actions.
  const [{ questionsArr, status, index, points, answer, secondsRemaining }, dispatch] = useReducer(reducer, initialState);

  // Calculate the number of questions and the maximum possible points
  const numQuestions = questionsArr.length;
  const maxPossiblePoints = questionsArr.reduce((total, question) => total + question.points, 0);


  // Fetch questions data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:8000/questions").then((res) => res.json()).then((data) => {
      dispatch({ type: "dataReceived", payload: data });
    }).catch((err) => { console.error("MyError fetching questions:", err); dispatch({ type: "dataFailed" }); });
  }, []);
  // Debugging state and calculated max points
  console.log('State Object:', { questionsArr, status, index, points, answer, secondsRemaining });

  return (
    <div className="app">
      <Header />
      {/* Show loader when data is loading */}
      {status === "loading" && <Loader />}

      {/* Show error message if data fetching failed */}
      {status === "error" && <Error />}

      {/** Show Start screen when data is ready */}
      {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}

      {/** Show quiz screen when quiz is active */}
      {status === "active" && (
        <>
          <Progress
            numQuestions={numQuestions}
            index={index}
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            answer={answer}
          />
          <Question
            questionsArr={questionsArr[index]}
            dispatch={dispatch}
            answer={answer}
          />

          <Footer>
            <Timer />
            <NextButton
              dispatch={dispatch}
              index={index}
              numQuestions={numQuestions}


            />
          </Footer>


        </>
      )}
    </div>
  );
}


export default App;
