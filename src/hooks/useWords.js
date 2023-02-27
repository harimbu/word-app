import { useEffect, useState } from 'react'
import { db } from '../firebase'
import {
  collection,
  query,
  onSnapshot,
  where,
  orderBy,
} from 'firebase/firestore'

export default function useWords(d) {
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

  return words
}
