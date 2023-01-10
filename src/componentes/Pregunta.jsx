import React from "react";

export default function Pregunta(props) {
  const radios = props.respuestas.map((res) => <p>{res}</p>);

  return (
    <>
      <h3>{props.pregunta}</h3>;<p>{radios}</p>
    </>
  );
}
