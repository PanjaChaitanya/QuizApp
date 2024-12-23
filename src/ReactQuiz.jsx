import React, { useState } from "react";
import "./App.css";

function ReactQuiz() {
  const question = [
    "What is JSX in React?",
    "What is the use of useState in React?",
    "Which method is used to update state in a React class component?",
    "What is a React component?",
    "What is the Virtual DOM?",
    "What is React Router used for?",
    "What is a key in React?",
    "What is the purpose of useEffect in React?",
    "Which of the following is true about React props?",
    "How can you prevent re-rendering in React?",
  ];

  const options = [
    {
      optionvalue: [
        "A syntax extension for JavaScript",
        "A React component",
        "A JavaScript library",
        "A CSS framework",
      ],
      ans: "A syntax extension for JavaScript",
    },
    {
      optionvalue: [
        "To fetch data from an API",
        "To manage state in a functional component",
        "To make HTTP requests",
        "To define styles in React",
      ],
      ans: "To manage state in a functional component",
    },
    {
      optionvalue: [
        "setState()",
        "useEffect()",
        "useState()",
        "getDerivedStateFromProps()",
      ],
      ans: "setState()",
    },
    {
      optionvalue: [
        "A JavaScript function or class",
        "A CSS framework",
        "A type of DOM element",
        "A package in React library",
      ],
      ans: "A JavaScript function or class",
    },
    {
      optionvalue: [
        "A Real DOM in the browser",
        "A lightweight JavaScript representation of the DOM",
        "A direct manipulation of the browser DOM",
        "A JavaScript library",
      ],
      ans: "A lightweight JavaScript representation of the DOM",
    },
    {
      optionvalue: [
        "For server-side rendering",
        "To manage routing and navigation in a React app",
        "To fetch API data",
        "To connect to a database",
      ],
      ans: "To manage routing and navigation in a React app",
    },
    {
      optionvalue: [
        "A unique identifier for list items in React",
        "A security feature in React",
        "A way to optimize state updates",
        "A method for debugging React code",
      ],
      ans: "A unique identifier for list items in React",
    },
    {
      optionvalue: [
        "To perform side effects in React components",
        "To initialize a component",
        "To create a Virtual DOM",
        "To define custom hooks",
      ],
      ans: "To perform side effects in React components",
    },
    {
      optionvalue: [
        "Props are immutable",
        "Props are used to manage component state",
        "Props are only available in functional components",
        "Props are similar to the DOM",
      ],
      ans: "Props are immutable",
    },
    {
      optionvalue: [
        "By using useMemo or React.memo",
        "By calling setState directly",
        "By updating the props",
        "By modifying the DOM directly",
      ],
      ans: "By using useMemo or React.memo",
    },
  ];

  const [counter, setCounter] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [ans, setAns] = useState([]);
  const [score, setScore] = useState(0);

  function Change() {
    setCounter(counter + 1);
    setSelectedOption(null);
  }

  function PrevQ() {
    setCounter(counter - 1);
    setSelectedOption(null);
  }
  function SelectQ(index) {
    const selected = options[counter].optionvalue[index];
    const correctAnswer = options[counter].ans;
  
    const newUserAnswers = [...ans];
    const previousAnswer = newUserAnswers[counter];
  
    newUserAnswers[counter] = selected;
    setAns(newUserAnswers);
  
    if (selected === correctAnswer && previousAnswer !== selected) {
      setScore(score + 1);
    } else if (previousAnswer === correctAnswer && selected !== correctAnswer) {
      setScore(score - 1);
    }
    setSelectedOption(index);
  }
  
  function handleSubmit() {
    document.querySelector(".card").style.display = "none";
    document.querySelector(".result").style.display = "flex";
  }
  function reloadFun(){
    window.location.reload();
  }
  return (
    <>
      <div className="QuizContainer">
        <div className="card">
          <div className="head">
          <h2>React </h2>
          <h3> Question No: {counter + 1} / {question.length}</h3>
          <button type="button" className="submitBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
          </div>
          <h3>{question[counter]}</h3>
          <div id="option">
            {options[counter].optionvalue.map((x, index) => (
              <li
                key={index}
                onClick={() => SelectQ(index)}
                className={selectedOption === index ? "selected" : ""}
                id={index}
              >
                {x}
              </li>
            ))}
          </div>
          <button
            onClick={PrevQ}
            className="button"
            disabled={counter === 0}
          >
            Prev
          </button>
          <button
            onClick={Change}
            className="button"
            disabled={counter === question.length - 1}
          >
            Next
          </button>
          
        </div>
        <div className="result" style={{display:'none'}} >
          <h2>Result of Your React Quiz</h2>
          <div className="circle">
          <p>You scored</p> 
          <h3><span>{score * 10}</span> out of <span>{question.length * 10}</span></h3>
          </div>
          <button className="homeBtn" onClick={reloadFun}><img src="./images/homebtn.png" width="35px" alt="" /></button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                React Quiz
              </h1>
            </div>
            <div className="modal-body">
              Are you Sure to submit the Quiz?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                Yes,Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactQuiz;
