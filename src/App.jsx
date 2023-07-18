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
  }, [])

  function StartQuizz() {
    setStart(true)
  }

  return (
    start
      ? <Quizz
          data={data}
        />
       : <StartPage startQuizz={StartQuizz} />
  )
}


export default App
