import React from 'react'
import Finaloption from '../atoms/finaloption'

const Displayall = ({ res, quiz, final }) => {
  return (
    <div>
      <div>
        <h2 className='font-bold text-center    text-2xl my-4'>
          You got {res.length}/ {quiz.length}
        </h2>

        {quiz.map((item, index) => {
          return (
            <div className='my-6' key={index}>
              <div className='flex'>
                <span className='mr-3 font-bold text-center   text-2xl mb-4'>
                  {index + 1 + '.'}
                </span>
                <h1 className='font-bold    text-xl sm:text-2xl mb-4'>
                  {item.question}
                </h1>
              </div>
              <fieldset className='max-w-sm ml-10 '>
                <Finaloption item={item} final={final} />
              </fieldset>
            </div>
          )
        })}

        <a
          href='/'
          className='text-white block mt-24 w-80 py-2 mx-auto text-center rounded-xl text-twenFour uppercase bg-pr font-bold'
        >
          Go back
        </a>
      </div>
    </div>
  )
}

export default Displayall
