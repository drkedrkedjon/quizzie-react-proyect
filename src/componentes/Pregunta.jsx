import React from "react";

export default function Pregunta({ respuestas, pregunta, resCorrecta }) {
  const radios = respuestas.map((res) => <p key={res}>{res}</p>);
  return (
    <div className="pregunta">
      <h3>{pregunta}</h3>
      <div className="pregunta--respuestas">{radios}</div>
    </div>
  );
}
