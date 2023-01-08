import React from 'react'
import StartPage from './componentes/StartPage'
import Quizz from './componentes/Quizz'
import './App.css'

function App() {
  const [start, setStart] = React.useState(false)
  const [data, setData] = React.useState({})
  
  React.useEffect(function() {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(res => res.json())
    .then(preg => setData( oldData => oldData = {...preg} ))
  }, [start])
  
  console.log(data)

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
