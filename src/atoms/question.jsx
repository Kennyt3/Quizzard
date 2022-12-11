const Question = ({ dex, quiz }) => {
  return (
    <>
      <noscript className=''>
        {quiz?.[dex]?.incorrectAnswers.length === 4 &&
          quiz?.[dex]?.incorrectAnswers.sort()}
      </noscript>
      <noscript className=''>
        {!quiz?.[dex]?.incorrectAnswers.includes(quiz?.[dex]?.correctAnswer) &&
          quiz?.[dex]?.incorrectAnswers.push(quiz?.[dex]?.correctAnswer)}
      </noscript>
      <span className='mr-3 font-bold text-center   text-2xl mb-4'>
        {dex + 1 + '.'}
      </span>
      <h1 className='font-bold    text-2xl mb-4'>{quiz?.[dex]?.question}</h1>
    </>
  )
}

export default Question
