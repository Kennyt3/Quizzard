// import Rinput from './rinput'
// import Rlabel from './rlabel'

function Options({ quiz, dex, setName, setSelect, names, setArr }) {
  return (
    <div>
      <ul className=' items-center  ml-9 '>
        {quiz?.[dex]?.incorrectAnswers.map((item, index) => {
          return (
            <li
              key={index}
              onChange={(e) => {
                setSelect(e.target.value)
                setName(e.target.name)
                names = e.target.name
                quiz[dex].regions[dex] = e.target.value
                // console.log({
                //   ans: quiz[dex].regions[dex],
                //   name: names,
                // })
                setArr((prev) => [
                  ...prev,
                  (prev[dex] = {
                    ans: quiz[dex].regions[dex],
                    name: names,
                  }),
                ])
              }}
            >
              {/* <Rinput index={index} item={item} dex={dex} />
              <Rlabel dex={dex} index={index} item={item} /> */}
              <input
                name={`group${dex + 1}`}
                id={`group${dex + 1}${index}`}
                type='radio'
                value={item}
                onChange={(e) => {
                  setName(e.target.name)
                }}
                checked={quiz[dex].regions[dex] === item}
              />
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
