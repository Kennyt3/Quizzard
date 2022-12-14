function Rlabel({ dex, index, item }) {
  return (
    <>
      <label htmlFor={`group${dex + 1}${index}`}>
        <span className='font-medium text-center ml-4 capitalize text-lg'>
          {item}
        </span>
      </label>
    </>
  )
}

export default Rlabel
