import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from './form'
import Ready from '../atoms/ready'

function Questions() {
  const [quiz, setQuiz] = useState([])
  const [ready, setReady] = useState(false)
  const [dex, setDex] = useState(0)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [arr, setArr] = useState([])
  const [select, setSelect] = useState('')
  const newArr = ['', '', '', '', '', '', '']
  let names = ''
  console.log(name, arr, select, newArr)

  const getQuestions = () => {
    setReady(true)
  }

  // const fetcher = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://the-trivia-api.com/api/questions?limit=5'
  //     )
  //     const product = await response.json()
  //     setQuiz(product)
  //   } catch (error) {
  //     setError(error)
  //   }
  // }

  useEffect(() => {
    fetch('https://the-trivia-api.com/api/questions?limit=10')
      .then((res) => res.json())
      .then((data) => setQuiz(data))
      .catch((error) => setError(error))
    // fetcher()
  }, [])

  const getNextQuestion = () => {
    setDex((dex) => dex + 1)
  }
  const getPrevQuestion = () => {
    if (dex > 0) {
      setDex((dex) => dex - 1)
    }
  }

  useEffect(() => {}, [arr])

  const submitForm = (e) => {
    e.preventDefault()
    let final = []
    let corr = []
    let wrong = []
    navigate('/')
    arr.map((item, index) => {
      return item?.name === `group${index + 1}` && (final[index] = arr[index])
    })
    quiz.map((item, index) => {
      return item.correctAnswer === final[index]?.ans
        ? (corr[index] = final[index]?.ans)
        : (wrong[index] = final[index]?.ans)
    })
    // console.log(arr)
    // console.log(final)
    // console.log(wrong)
    // console.log(corr)
    // console.log(
    //   quiz.map((item) => {
    //     return item.correctAnswer
    //   })
    // )
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
              setName={setName}
              setSelect={setSelect}
              setArr={setArr}
              names={names}
            />
          )}
        </div>
      )}
    </div>
  )
}
export default Questions
