'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './components/card'
import { Button } from './components/button'
import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'

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
    <div className='flex flex-col  min-h-screen text-center '>
      <Header page='home' />
      <div className='flex flex-1 flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to the Quiz App</h1>
        <p className='text-lg mb-6'>
          Test your knowledge and receive results instantly!
        </p>
        <div className='flex gap-4'>
          <Link href='/login'>
            <Button className='bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-lg'>
              Login
            </Button>
          </Link>
          <Link href='/register'>
            <Button className='!bg-gray-700 text-white p-4 rounded-lg hover:!bg-gray-600'>
              Register
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default QuizApp
