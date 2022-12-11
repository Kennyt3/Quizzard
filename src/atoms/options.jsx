import Rinput from './rinput'

function Options({ quiz, dex }) {
  return (
    <div>
      <ul className=' items-center  ml-9 '>
        {quiz?.[dex]?.incorrectAnswers.map((item, index) => {
          return (
            <li key={index}>
              <Rinput index={index} item={item} dex={dex} />

              <label htmlFor={`group${dex + 1}${index}`}>
                <span className='font-medium text-center ml-4 capitalize text-lg'>
                  {item}
                </span>
              </label>
            </li>
          )
        })}
        {/* {console.log(quiz?.[dex]?.correctAnswer)} */}
      </ul>
    </div>
  )
}

export default Options
