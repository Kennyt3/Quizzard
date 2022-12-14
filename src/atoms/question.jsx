const Question = ({ dex, quiz }) => {
  return (
    <>
      <span className='mr-3 font-bold text-center   text-2xl mb-4'>
        {dex + 1 + '.'}
      </span>
      <h1 className='font-bold    text-2xl mb-4'>{quiz?.[dex]?.question}</h1>
    </>
  )
}

export default Question
