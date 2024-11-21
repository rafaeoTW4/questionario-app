import React, { useState } from "react";

const AnswerQuestions = ({ questions, onSaveAnswers }) => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSave = () => {
    onSaveAnswers(answers);
    setAnswers({});
  };

  return (
    <div>
      <h2>Responder Perguntas</h2>
      {questions.length === 0 ? (
        <p>Não há perguntas cadastradas.</p>
      ) : (
        questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <input
              type="text"
              placeholder="Sua resposta"
              value={answers[index] || ""}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </div>
        ))
      )}
      <button onClick={handleSave}>Salvar Respostas</button>
    </div>
  );
};

export default AnswerQuestions;
