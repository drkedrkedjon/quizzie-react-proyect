import React from "react";
import Pregunta from "./Pregunta";

export default function Quizz(props) {
  const preguntas = props.data.results.map((pregunta) => {
    // Meter todas las posibles respuestas en un array
    const respuestas = [];
    respuestas.push(pregunta.correct_answer);
    pregunta.incorrect_answers.forEach((res) => respuestas.push(res));

    // Hacer orden aleatoria para no tener la respuesta correcta en el mismo lugar.
    let indexActual = respuestas.length;
    let indexRandom = Math.floor(Math.random() * respuestas.length);
    while (indexActual !== 0) {
      indexActual--;
      let temp = respuestas[indexActual];
      respuestas[indexActual] = respuestas[indexRandom];
      respuestas[indexRandom] = temp;
    }
    console.log(respuestas);

    return (
      <Pregunta
        key={pregunta.question}
        pregunta={pregunta.question}
        respuestas={respuestas}
      />
    );
  });

  return <div>{preguntas}</div>;
}
