function Rinput({ dex, index, item }) {
  return (
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
  )
}

export default Rinput
