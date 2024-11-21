import React, { useState } from "react";
import AddQuestion from "./components/AddPergunta";
import AnswerQuestions from "./components/ResponderPergunta";
import DisplayAnswers from "./components/MostrarPerguntas";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const handleAddQuestion = (question) => {
    setQuestions((prev) => [...prev, question]);
  };

  const handleSaveAnswers = (newAnswers) => {
    setAnswers((prev) => ({ ...prev, ...newAnswers }));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Questionário</h1>
      <AddQuestion onAddQuestion={handleAddQuestion} />
      <hr />
      <AnswerQuestions questions={questions} onSaveAnswers={handleSaveAnswers} />
      <hr />
      <DisplayAnswers questions={questions} answers={answers} />
    </div>
  );
};

export default App;
