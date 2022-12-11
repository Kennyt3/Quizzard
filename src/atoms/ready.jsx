function Ready({ getQuestions }) {
  return (
    <>
      <h1 className='uppercase font-bold   text-thirSix  text-center'>
        Ready to take the test?
      </h1>
      <button
        onClick={getQuestions}
        className='text-white block mt-24 w-80 py-2 mx-auto text-center rounded-xl text-twenFour uppercase bg-pr font-bold'
      >
        Get questions
      </button>
    </>
  )
}

export default Ready
