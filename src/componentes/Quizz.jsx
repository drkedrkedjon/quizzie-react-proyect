import React from 'react'
import Pregunta from './Pregunta'

export default function Quizz(props) {
  
  
  const preguntas = props.data.results.map( pregunta => {
    const respuestas = []
    respuestas.push(pregunta.correct_answer)
    const falsos = pregunta.incorrect_answers
    falsos.forEach( res => respuestas.push(res) )
    
    

    console.log(respuestas)
    return (
      <Pregunta 
          pregunta={pregunta.question}
      />
      )
    } )


    return (
      <div>
        {preguntas}
      </div>
  )
}