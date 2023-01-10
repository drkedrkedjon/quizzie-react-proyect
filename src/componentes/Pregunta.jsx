import React from "react";

export default function Pregunta({ respuestas, pregunta, resCorrecta }) {
  const [formData, setFormData] = React.useState({ respuesta: "" });

  function manejarCambio(evento) {
    const { name, value, type, checked } = evento.target;
    setFormData((oldForm) => ({ ...oldForm, respuesta: checked }));
  }

  const radios = respuestas.map((res) => {
    return (
      <>
        <input
          key={res}
          type="radio"
          id={res}
          name="respuestas"
          value={res}
          onChange={manejarCambio}
          checked={formData.respuesta === { res }}
        />
        <label htmlFor={res}>{res}</label>
      </>
    );
  });

  return (
    <div className="pregunta">
      <h3>{pregunta}</h3>
      <form>
        <fieldset className="pregunta--respuestas">{radios}</fieldset>
      </form>
    </div>
  );
}

// <p key={res}>{res}</p>
