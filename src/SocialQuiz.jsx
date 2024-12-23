import React, { useState } from "react";
import "./App.css";

function SocialQuiz() {
  const question = [
    "Who is the current Prime Minister of India?",
    "Who is the current Deputy CM of Ap?",
    "What is the capital of Andhra Pradesh?",
    "Who is the Chief Minister of Telangana?",
    "Which year did India gain independence?",
    "Who is known as the Father of the Nation in India?",
    "Which party is currently ruling in India (2024)?",
    "What is the national animal of India?",
    "Who was the first Prime Minister of India?",
    "Which Indian state has Hyderabad as its capital?",
  ];
  
  const options = [
    {
      optionvalue: [
        "YS Jagan",
        "Narendra Modi",
        "Rahul Gandhi",
        "Amit Shah"
      ],
      ans: "Narendra Modi",
    },
    {
      optionvalue: [
        "Droupadi Murmu",
        "Pawan Kalyan",
        "Chandra babu Naidu",
        "Anitha",
      ],
      ans: "Pawan Kalyan",
    },
    {
      optionvalue: ["Vizag", "Amaravati", "Karnool", "All of the above"],
      ans: "Amaravati",
    },
    {
      optionvalue: [
        "K. Chandrashekar Rao",
        "Y. S. Jagan",
        "N. Chandrababu Naidu",
        "Revanth Reddy",
      ],
      ans: "K. Chandrashekar Rao",
    },
    {
      optionvalue: ["1945", "1947", "1950", "1952"],
      ans: "1947",
    },
    {
      optionvalue: [
        "Subhas Chandra Bose",
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "B. R. Ambedkar",
      ],
      ans: "Mahatma Gandhi",
    },
    {
      optionvalue: [
        "Indian National Congress",
        "Bharatiya Janata Party (BJP)",
        "Aam Aadmi Party",
        "Communist Party of India",
      ],
      ans: "Bharatiya Janata Party (BJP)",
    },
    {
      optionvalue: ["Tiger", "Peacock", "Elephant", "Lion"],
      ans: "Tiger",
    },
    {
      optionvalue: [
        "Mahatma Gandhi",
        "Subhas Chandra Bose",
        "Jawaharlal Nehru",
        "Rajendra Prasad",
      ],
      ans: "Jawaharlal Nehru",
    },
    {
      optionvalue: ["Telangana", "Andhra Pradesh", "Kerala", "Karnataka"],
      ans: "Telangana",
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
          <h2>Social </h2>
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
          <div>
          <button className="homeBtn" onClick={reloadFun}><img src="./images/homebtn.png" width="35px" alt="" /></button>
          </div>
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
                Social Quiz
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

export default SocialQuiz;
