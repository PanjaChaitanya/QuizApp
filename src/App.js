import React, { useState } from 'react';
import ReactQuiz from './ReactQuiz';
import SocialQuiz from './SocialQuiz';
import './App.css';

function App() {
  const [quizType, setQuizType] = useState('nothing'); 

  function selectQuiz(type) {
    setQuizType(type); 
  }
  function reloadFun(){
    window.location.reload();
  }
  return (
    <>
      {quizType === 'nothing' ? (
        <div className="startQuiz">
          <h1>Welcome to the Quiz App!</h1>
          <p>Select a quiz to get started:</p>
          <div className="quizSelectionButtons">
            <button onClick={() => selectQuiz('ReactQuiz')} className="quizButton">
              React Quiz
            </button>
            <button onClick={() => selectQuiz('SocialQuiz')} className="quizButton">
              Social Quiz
            </button>
          </div>
        </div>
      ) : (
        <>
          <button className="backButton" onClick={reloadFun}>
            <img src='./images/backQ.png' width='40px' alt=''/>
          </button>
          {quizType === 'ReactQuiz' ? <ReactQuiz /> : <SocialQuiz />}
        </>
      )}
    </>
  );
}

export default App;
