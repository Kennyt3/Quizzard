import { useState } from 'react'

function Questions() {
  const [quiz, setQuiz] = useState([])
  const [ready, setReady] = useState(false)

  const getQuestions = () => {
    setReady(true)
    fetch('https://the-trivia-api.com/api/questions?limit=20')
      .then((res) => res.json())
      .then((data) => setQuiz(data))
  }

  return (
    <div>
      {!ready && (
        <div>
          <h1 className='uppercase font-bold text-thirSix mt-14 text-center'>
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
          <ul className='ml ml-8'>
            {quiz.map((item, index) => {
              return (
                <li key={index} className='mt-7 list-decimal'>
                  <div>
                    <h1>{item.question}</h1>
                    <ol>
                      <li>
                        <label htmlFor=''>
                          <input
                            value={item.correctAnswer}
                            name={item.id}
                            id={item.correctAnswer}
                            type='radio'
                          />
                          <span className='ml-3'>{item.correctAnswer}</span>
                        </label>
                      </li>
                      {item.incorrectAnswers.map((litem, lindex) => {
                        console.log(item.id + lindex)

                        return (
                          <li key={lindex}>
                            <label htmlFor=''>
                              <input
                                value={litem}
                                name={item.id}
                                id={lindex}
                                type='radio'
                              />
                              <span className='ml-3'>{litem}</span>
                            </label>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
export default Questions
