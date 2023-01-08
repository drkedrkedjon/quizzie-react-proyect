import React from 'react'
import StartPage from './componentes/StartPage'
import Quizz from './componentes/Quizz'
import './App.css'

function App() {
  const [start, setStart] = React.useState(false)

  function StartQuizz() {
    setStart(true)
  }

  return (
    start ? <Quizz /> : <StartPage
        StartQuizz={StartQuizz}
      />
  )
}

export default App
