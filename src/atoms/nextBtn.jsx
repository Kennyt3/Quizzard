function NextBtn({ getNextQuestion }) {
  return (
    <div>
      <button
        type='button'
        className='bg-pr text-white font-bold text-xl uppercase xxsm:px-4 xxsm2:px-6 xsm:mx-6   xsm:px-10 py-3 rounded-xl'
        onClick={getNextQuestion}
      >
        Next
      </button>
    </div>
  )
}

export default NextBtn
