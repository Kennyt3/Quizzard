function Rinput({ dex, index, item }) {
  return (
    <input
      name={`group${dex + 1}`}
      // name={quiz?.[dex]?.id}
      id={`group${dex + 1}${index}`}
      type='radio'
      value={item}
      onChange={(e) => {
        setName(e.target.name)
      }}
      checked={quiz[dex].regions[dex] === item}
      // checked={checked}
    />
  )
}

export default Rinput
