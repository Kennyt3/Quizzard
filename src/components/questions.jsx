import { useState } from 'react'

import Form from './form'
import Ready from '../atoms/ready'

function Questions() {
  const [quiz, setQuiz] = useState([])
  const [ready, setReady] = useState(false)
  const [dex, setDex] = useState(0)
  const [error, setError] = useState('')

  // const [checked, setChecked] = useState(false)

  const getQuestions = () => {
    setReady(true)
    fetch('https://the-trivia-api.com/api/questions?limit=20')
      .then((res) => res.json())
      .then((data) => setQuiz(data))
      .catch((error) => setError(error))
  }

  const getNextQuestion = () => {
    setDex((dex) => dex + 1)
  }
  const getPrevQuestion = () => {
    if (dex > 0) {
      setDex((dex) => dex - 1)
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className=' h-screen  max-w-xl mx-auto'>
      {!ready && (
        <div className=' flex flex-col  items-center pt-32 h-full'>
          <Ready getQuestions={getQuestions} />
        </div>
      )}
      {ready && (
        <div className='h-full'>
          {quiz.length < 1 ? (
            <div>
              loading...
              <h1>{error}</h1>
            </div>
          ) : (
            <Form
              submitForm={submitForm}
              quiz={quiz}
              dex={dex}
              getNextQuestion={getNextQuestion}
              getPrevQuestion={getPrevQuestion}
            />
          )}
        </div>
      )}
    </div>
  )
}
export default Questions
