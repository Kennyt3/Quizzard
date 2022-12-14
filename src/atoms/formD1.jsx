import Question from '../atoms/question'
import Options from '../atoms/options'
import PrevBtn from '../atoms/prevBtn'
import NextBtn from '../atoms/nextBtn'
import { useEffect } from 'react'

function FormD1({
  arr,
  quiz,
  dex,
  getNextQuestion,
  getPrevQuestion,
  setName,
  setSelect,
  names,
  setArr,
}) {
  useEffect(() => {
    quiz?.[dex]?.incorrectAnswers.length === 4 &&
      quiz?.[dex]?.incorrectAnswers.sort()

    !quiz?.[dex]?.incorrectAnswers.includes(quiz?.[dex]?.correctAnswer) &&
      quiz?.[dex]?.incorrectAnswers.push(quiz?.[dex]?.correctAnswer)
  }, [])
  // <noscript className=''>
  // </noscript>
  // <noscript className=''>
  // </noscript>
  return (
    <div>
      <div className='flex '>
        <Question quiz={quiz} dex={dex} />
      </div>
      <fieldset className='max-w-sm ml-10 '>
        <Options
          quiz={quiz}
          dex={dex}
          arr={arr}
          setName={setName}
          setSelect={setSelect}
          setArr={setArr}
          names={names}
        />
      </fieldset>
      <div className='flex xxsm:w-screen  justify-around   sm:w-full  mt-10'>
        <PrevBtn getPrevQuestion={getPrevQuestion} />
        <NextBtn getNextQuestion={getNextQuestion} />
      </div>
    </div>
  )
}

export default FormD1
