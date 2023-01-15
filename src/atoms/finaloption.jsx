import React from 'react'
// import { useState } from 'react'

// const [oni, setOni] = useState([])

const Finaloption = ({ item, final }) => {
  return (
    <div>
      <ul className=' items-center  ml-9 '>
        {item.incorrectAnswers?.map((opt, index) => {
          return (
            <li key={index}>
              <label>
                <input
                  type='radio'
                  disabled
                  value={opt}
                  name={`group1${index}`}
                  // checked={item.incorrectAnswers[index] === final[index]?.ans}
                  className={`${
                    final[index]?.ans === item.incorrectAnswers[index] &&
                    'bg-blue-700'
                  }`}
                />
                {console.log(item.incorrectAnswers[index])}
                <span className='font-medium text-center ml-4 capitalize text-lg'>
                  {opt}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Finaloption
