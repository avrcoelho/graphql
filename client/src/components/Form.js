import React, { useState } from "react";

// import { Container } from './styles';

export default function Form() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o seu nome"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Digite o seu comentário"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Comentar</button>
    </form>
  );
}
