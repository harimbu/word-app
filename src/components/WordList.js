import { useParams } from 'react-router-dom'
import Word from './Word'
import useWords from '../hooks/useWords'

export default function WordList() {
  const d = Number(useParams().day)
  const words = useWords(d)

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
