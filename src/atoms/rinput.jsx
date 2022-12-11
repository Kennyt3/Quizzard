function Rinput({ dex, index, item }) {
  return (
    <input
      name={`group${dex + 1}`}
      // name={quiz?.[dex]?.id}
      id={`group${dex + 1}${index}`}
      type='radio'
      value={item}

      // checked={checked}
    />
  )
}

export default Rinput
