import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import Form from './form'
import Ready from '../atoms/ready'
import Displayall from './displayall'

function Questions() {
  const [quiz, setQuiz] = useState([])
  const [ready, setReady] = useState(false)
  const [dex, setDex] = useState(0)
  const [final, setFinal] = useState([])
  // const navigate = useNavigate()
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [arr, setArr] = useState([])
  const [showres, setShowres] = useState(false)
  const [res, setRes] = useState([])
  // const [showans, setshowans] = useState(false)

  const [select, setSelect] = useState('')
  const newArr = ['', '', '', '', '', '', '']
  let names = ''
  // console.log(name, arr, select, newArr)

  const getQuestions = () => {
    setReady(true)
    console.log(error)
  }

  // console.log(final)
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
    // fetcher()
    fetch('https://the-trivia-api.com/api/questions?limit=10')
      .then((res) => res.json())
      .then((data) => setQuiz(data))
      .catch((error) => setError(error))
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
    let check = []
    // navigate('/')
    arr.map((item, index) => {
      return item?.name === `group${index + 1}` && (final[index] = arr[index])
    })

    quiz.map((item, index) => {
      return item.correctAnswer === final[index]?.ans
        ? (corr[index] = final[index]?.ans)
        : (wrong[index] = final[index]?.ans)
    })
    setFinal(final)
    console.log(name, arr, select, newArr)
    // setshowans(true)
    console.log(arr)
    // console.log(showans)
    console.log(final)
    console.log(wrong)
    console.log(corr)
    console.log(
      quiz.map((item, index) => {
        return (
          item.correctAnswer === final[index]?.ans &&
          check.push(item.correctAnswer)
        )
      })
    )
    console.log(
      quiz.map((item) => {
        return item.correctAnswer
      })
    )

    setShowres(true)
    setRes(check)
  }

  return (
    <div className=' h-screen max-w-xl mx-auto'>
      {!showres && (
        <div>
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
                  {/* <h1>{error}</h1> */}
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
      )}
      {showres && (
        <div>
          <Displayall res={res} quiz={quiz} final={final} />
        </div>
      )}
    </div>
  )
}
export default Questions
