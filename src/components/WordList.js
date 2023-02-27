import { useParams } from 'react-router-dom'
import Word from './Word'
import { db } from '../firebase'
import {
  collection,
  query,
  onSnapshot,
  where,
  orderBy,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function WordList() {
  const d = Number(useParams().day)

  const [words, setWords] = useState([])

  useEffect(() => {
    const q = query(
      collection(db, 'words'),
      where('day', '==', d),
      orderBy('date', 'desc')
    )
    const unsub = onSnapshot(q, querySnapshot => {
      const items = []
      querySnapshot.forEach(doc => {
        items.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setWords(items)
    })
    return () => unsub()
  }, [d])

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
