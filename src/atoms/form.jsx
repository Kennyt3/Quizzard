const Form = (quiz, dex, getPrevQuestion, getNextQuestion) => {
  return (
    <form
      action=''
      className='flex flex-col h-full items-center justify-center '
      onSubmit={{ submitDetails }}
    >
      <div className=' w-full'>
        {dex < quiz.length ? (
          <fieldset className='  w-full'>
            <noscript className=''>
              {!quiz?.[dex]?.incorrectAnswers.includes(
                quiz?.[dex]?.correctAnswer
              ) &&
                quiz?.[dex]?.incorrectAnswers.push(quiz?.[dex]?.correctAnswer)}
            </noscript>
            <noscript className=''>
              {quiz?.[dex]?.incorrectAnswers.length === 4 &&
                quiz?.[dex]?.incorrectAnswers.sort()}
            </noscript>

            <div className='flex '>
              <span className='mr-3 font-bold text-center   text-2xl mb-4'>
                {dex + 1 + '.'}
              </span>
              <h1 className='font-bold    text-2xl mb-4'>
                {quiz?.[dex]?.question}
              </h1>
            </div>
            <div className='max-w-sm ml-10 '>
              <ul className=' items-center  ml-9'>
                {quiz?.[dex]?.incorrectAnswers.map((item, index) => {
                  return (
                    <li key={index}>
                      <label htmlFor=''>
                        <input name={quiz?.[dex]?.id} id='' type='radio' />
                        <span className='font-medium text-center ml-4 capitalize text-lg'>
                          {item}
                        </span>
                      </label>
                    </li>
                  )
                })}
                {console.log(quiz?.[dex]?.correctAnswer)}
              </ul>
            </div>
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
          </fieldset>
        ) : (
          <div>
            {console.log(quiz.length)}
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
  )
}

export default Form
