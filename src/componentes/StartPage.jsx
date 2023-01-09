import React from 'react'

export default function StartPage(props) {

  return(
    <div className='flow start-page'>
      <h1>Quizzie</h1>
      <p>Bienvenidos a Quizzie</p>
      <button onClick={props.startQuizz} className='startPage--btn' >Start Quiz</button>
    </div>
  )

}