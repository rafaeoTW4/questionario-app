import React from "react";

const DisplayAnswers = ({ questions, answers }) => {
  return (
    <div>
      <h2>Respostas Salvas</h2>
      {questions.length === 0 ? (
        <p>Não há perguntas cadastradas.</p>
      ) : (
        questions.map((question, index) => (
          <div key={index}>
            <p>
              <strong>{question}</strong>
            </p>
            <p>Resposta: {answers[index] || "Sem resposta"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayAnswers;
