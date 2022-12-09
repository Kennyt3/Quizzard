// import Questions from './questions'

function Header() {
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='ml-6 mr-6 text-4xl text-center font-bold text-pr'>
        WELCOME TO QUIZZARD
      </h1>
      <h3 className='text-3xl w-fit mt-24 mx-auto font-medium  text-center'>
        Test your knowledge and challenge yourself with our fun and interactive
        quizzes.
      </h3>
      <a
        href='/quiz'
        className='text-white block mt-24 w-80 py-2 mx-auto text-center rounded-xl text-twenFour uppercase bg-pr font-bold'
      >
        Go to Quiz
      </a>
    </div>
  )
}

export default Header
