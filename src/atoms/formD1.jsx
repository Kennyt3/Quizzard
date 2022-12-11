import Question from '../atoms/question'
import Options from '../atoms/options'
import PrevBtn from '../atoms/prevBtn'
import NextBtn from '../atoms/nextBtn'

function FormD1({ quiz, dex, getNextQuestion, getPrevQuestion }) {
  return (
    <div>
      <noscript className=''>
        {quiz?.[dex]?.incorrectAnswers.length === 4 &&
          quiz?.[dex]?.incorrectAnswers.sort()}
      </noscript>
      <noscript className=''>
        {!quiz?.[dex]?.incorrectAnswers.includes(quiz?.[dex]?.correctAnswer) &&
          quiz?.[dex]?.incorrectAnswers.push(quiz?.[dex]?.correctAnswer)}
      </noscript>
      <div className='flex '>
        <Question quiz={quiz} dex={dex} />
      </div>
      <fieldset className='max-w-sm ml-10 '>
        <Options quiz={quiz} dex={dex} />
      </fieldset>
      <div className='flex xxsm:w-screen  justify-around   sm:w-full  mt-10'>
        <PrevBtn getPrevQuestion={getPrevQuestion} />
        <NextBtn getNextQuestion={getNextQuestion} />
      </div>
    </div>
  )
}

export default FormD1
