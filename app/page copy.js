'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './components/card'
import { Button } from './components/button'

const QuizApp = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    // Fetch questions from remote database
    fetch('https://the-trivia-api.com/api/questions?limit=20')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
  }, [])

  const handleNext = () => {
    setAnswers([
      ...answers,
      { question: questions[currentQuestion], answer: selectedAnswer },
    ])
    setSelectedAnswer(null)
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
      sendResultsByEmail()
    }
  }

  const sendResultsByEmail = () => {
    // Mock sending email
    console.log('Sending results to email', answers)
  }

  return (
    <div className='flex flex-col items-center p-8'>
      {!quizCompleted ? (
        <Card className='w-full max-w-xl p-6'>
          <CardContent>
            {questions.length > 0 && (
              <>
                <h2 className='text-xl font-bold mb-4'>
                  {questions[currentQuestion]?.question}
                </h2>
                <div className='flex flex-col gap-2'>
                  {questions[currentQuestion]?.options?.map((option, index) => (
                    <button
                      key={index}
                      className={`p-2 rounded-lg border ${
                        selectedAnswer === option
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100'
                      }`}
                      onClick={() => setSelectedAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <Button
                  className='mt-4'
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                >
                  {currentQuestion + 1 === questions.length ? 'Submit' : 'Next'}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card className='w-full max-w-xl p-6 text-center'>
          <CardContent>
            <h2 className='text-2xl font-bold mb-4'>Quiz Completed!</h2>
            <p>Your results have been sent to your email.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default QuizApp
