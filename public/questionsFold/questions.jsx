import { useState } from 'react'

function Questions() {
  const [quiz, setQuiz] = useState([])
  const [ready, setReady] = useState(false)
  const [dex, setDex] = useState(0)
  const [error, setError] = useState('')

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
  return (
    <div className='  items-center justify-center flex flex-col h-screen80 '>
      {!ready && (
        <div>
          <h1 className='uppercase font-bold   text-thirSix  text-center'>
            Ready to take the test?
          </h1>
          <button
            onClick={getQuestions}
            className='text-white block mt-24 w-80 py-2 mx-auto text-center rounded-xl text-twenFour uppercase bg-pr font-bold'
          >
            Get questions
          </button>
        </div>
      )}
      {ready && (
        <div>
          {quiz.length < 1 ? (
            <div>
              loading...
              <h1>{error}</h1>
            </div>
          ) : (
            <form action=''>
              <div className='mx-24'>
                {dex < quiz.length ? (
                  <fieldset>
                    <h1 className='font-bold text-2xl mb-4'>
                      <span className=' mr-3'>{dex + 1 + '.'}</span>

                      {quiz?.[dex]?.question}
                    </h1>
                    <ul className='  ml-9'>
                      <li className=''>
                        <label htmlFor=''>
                          <input name={quiz?.[dex]?.id} id='' type='radio' />
                          <span className='font-medium ml-4 capitalize text-lg'>
                            {quiz?.[dex]?.correctAnswer}
                          </span>
                        </label>
                      </li>
                      {quiz?.[dex]?.incorrectAnswers.map((item, index) => {
                        return (
                          <li key={index}>
                            <label htmlFor=''>
                              <input
                                name={quiz?.[dex]?.id}
                                id=''
                                type='radio'
                              />
                              <span className='font-medium ml-4 capitalize text-lg'>
                                {item}
                              </span>
                            </label>
                          </li>
                        )
                      })}
                    </ul>
                    <button
                      type='button'
                      className='bg-pr text-white font-bold text-xl uppercase mx-10 my-10 px-10 py-3 rounded-xl'
                      onClick={getPrevQuestion}
                    >
                      Prev
                    </button>
                    <button
                      type='button'
                      className='bg-pr text-white font-bold text-xl uppercase mx-10 my-10 px-10 py-3 rounded-xl'
                      onClick={getNextQuestion}
                    >
                      Next
                    </button>
                  </fieldset>
                ) : (
                  <div>
                    <h1 className='uppercase font-bold text-thirSix  text-center'>
                      Ready to submit your answers?
                    </h1>
                    <button
                      type='button'
                      className='bg-pr text-white font-bold text-xl uppercase mx-10 my-10 px-10 py-3 rounded-xl'
                      onClick={getPrevQuestion}
                    >
                      Prev
                    </button>
                    <button className='bg-pr text-white font-bold text-xl uppercase mx-10 my-10 px-10 py-3 rounded-xl'>
                      SUBMIT
                    </button>
                  </div>
                )}
              </div>
            </form>
          )}
          {console.log(quiz?.[dex]?.id)}
        </div>
      )}
    </div>
  )
}
export default Questions
