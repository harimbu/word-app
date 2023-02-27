import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Word from './Word'

export default function WordList() {
  const d = useParams().day
  const words = useFetch(`http://localhost:3001/words?day=${d}`)

  return (
    <div className="container">
      <h2 className="title">{d} 일차</h2>
      <table className="tbl">
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
