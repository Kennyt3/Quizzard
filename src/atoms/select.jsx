// import { useEffect, useState } from 'react'

// function Select() {
//   const [data, setData] = useState({})
//   const [value, setValue] = useState('')

//   useEffect(() => {
//     fetch(
//       // 'https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=18&difficulty=easy'
//       'https://the-trivia-api.com/api/categories'
//     )
//       .then((res) => res.json())
//       .then((data) => setData(data))
//   }, [])

//   const handleChange = (e) => {
//     setValue(e.target.value)
//     console.log(value)
//   }

//   const fetchCatData = () => {
//     fetch(`https://the-trivia-api.com/api/questions?categories`)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//   }
//   fetchCatData()

//   const stringed = Object.keys(data)

//   return (
//     <div>
//       <select name='' id='' value={value} onChange={handleChange}>
//         <option value='Joke'>Random</option>
//         {stringed.map((item, index) => (
//           <option value={data[item]} key={index}>
//             {item}
//           </option>
//         ))}
//       </select>
//       {/* <p>{res}</p> */}
//     </div>
//   )
// }

// export default Select
