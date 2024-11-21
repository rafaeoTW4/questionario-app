import React, { useState } from "react";
import AddQuestion from "./components/AddPergunta";
import AnswerQuestions from "./components/ResponderPergunta";
import DisplayAnswers from "./components/MostrarPerguntas";
import "./App.css"; // Importação do arquivo CSS

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
    <div >
      <h1 className="Titulo">Questionário</h1>
      <AddQuestion onAddQuestion={handleAddQuestion} />
      <hr />
      <AnswerQuestions questions={questions} onSaveAnswers={handleSaveAnswers} />
      <hr />
      <DisplayAnswers questions={questions} answers={answers} />
    </div>
  );
};

export default App;
