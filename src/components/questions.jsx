import { useState } from 'react'

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
    <div className=' h-screen  max-w-xl mx-auto '>
      {!ready && (
        <div className=' flex flex-col items-center justify-center h-full'>
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
        <div className='h-full'>
          {quiz.length < 1 ? (
            <div>
              loading...
              <h1>{error}</h1>
            </div>
          ) : (
            <form
              action=''
              className='flex flex-col h-full items-center justify-center '
              onSubmit={submitForm}
            >
              <div className=' w-full'>
                {dex < quiz.length ? (
                  <div className='  w-full'>
                    <noscript className=''>
                      {quiz?.[dex]?.incorrectAnswers.length === 4 &&
                        quiz?.[dex]?.incorrectAnswers.sort()}
                    </noscript>
                    <noscript className=''>
                      {!quiz?.[dex]?.incorrectAnswers.includes(
                        quiz?.[dex]?.correctAnswer
                      ) &&
                        quiz?.[dex]?.incorrectAnswers.push(
                          quiz?.[dex]?.correctAnswer
                        )}
                    </noscript>

                    <div className='flex '>
                      <span className='mr-3 font-bold text-center   text-2xl mb-4'>
                        {dex + 1 + '.'}
                      </span>
                      <h1 className='font-bold    text-2xl mb-4'>
                        {quiz?.[dex]?.question}
                      </h1>
                    </div>
                    <fieldset className='max-w-sm ml-10 '>
                      <ul className=' items-center  ml-9'>
                        {quiz?.[dex]?.incorrectAnswers.map((item, index) => {
                          return (
                            <li key={index}>
                              <input
                                name={`group${dex + 1}`}
                                // name={quiz?.[dex]?.id}
                                id={`group${dex + 1}${index}`}
                                type='radio'
                                value={item}

                                // checked={checked}
                              />

                              <label htmlFor={`group${dex + 1}${index}`}>
                                <span className='font-medium text-center ml-4 capitalize text-lg'>
                                  {item}
                                </span>
                              </label>
                            </li>
                          )
                        })}
                        {/* {console.log(quiz?.[dex]?.correctAnswer)} */}
                      </ul>
                    </fieldset>
                    <div className='flex xxsm:w-screen  justify-around   sm:w-full  mt-10'>
                      <button
                        type='button'
                        className='bg-pr text-white font-bold text-xl uppercase xxsm:px-4 xxsm2:px-6 xsm:mx-6  xsm:px-10 py-3 rounded-xl'
                        onClick={getPrevQuestion}
                      >
                        Prev
                      </button>
                      <button
                        type='button'
                        className='bg-pr text-white font-bold text-xl uppercase xxsm:px-4 xxsm2:px-6 xsm:mx-6   xsm:px-10 py-3 rounded-xl'
                        onClick={getNextQuestion}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1 className='uppercase font-bold text-thirSix  text-center'>
                      Ready to submit your answers?
                    </h1>
                    <div className=' flex xxsm:w-screen  justify-around   sm:w-full  mt-10'>
                      <button
                        type='button'
                        className='bg-pr text-white font-bold text-xl uppercase xxsm:px-4 xxsm2:px-6 xsm:mx-6  xsm:px-10 py-3 rounded-xl'
                        onClick={getPrevQuestion}
                      >
                        Prev
                      </button>
                      <button className='bg-pr text-white font-bold text-xl uppercase xxsm:px-4 xxsm2:px-6 xsm:mx-6  xsm:px-10 py-3 rounded-xl'>
                        SUBMIT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  )
}
export default Questions
