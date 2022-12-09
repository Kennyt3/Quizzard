export default function hum(jin) {
  function papa() {
    fetch(
      'https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=18&difficulty=easy'
    )
      .then((res) => res.json())
      .then((data) => hum(data))
  }
  papa()
  return jin
}
