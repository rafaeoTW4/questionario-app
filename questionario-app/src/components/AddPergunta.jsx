import React, { useState } from "react";

const AddQuestion = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleAdd = () => {
    if (question.trim() !== "") {
      onAddQuestion(question);
      setQuestion(""); // Limpar o campo após adicionar
    }
  };

  return (
    <div>
      <h2>Adicionar Pergunta</h2>
      <input
        type="text"
        placeholder="Digite sua pergunta"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default AddQuestion;
