import React from 'react'

export default function Quizz() {
  const [data, setData] = React.useState({})
  
  React.useEffect(function() {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(res => res.json())
    .then(preg => setData( oldData => oldData = {...preg} ))
  }, [])
  
  console.log(data)

  return (
    <h1>Quizz</h1>
  )
}