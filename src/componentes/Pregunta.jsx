import React from "react";

export default function Pregunta(props) {
  const radios = props.respuestas.map((res) => <p key={res}>{res}</p>);

  return (
    <div className="pregunta">
      <h3>{props.pregunta}</h3>
      <div className="pregunta--respuestas">{radios}</div>
    </div>
  );
}
