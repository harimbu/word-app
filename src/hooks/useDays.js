import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'

export default function useDays() {
  const [days, setDays] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'days'), orderBy('day', 'desc'))
    const unsub = onSnapshot(q, querySnapshot => {
      const items = []
      querySnapshot.forEach(doc => {
        items.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setDays(items)
    })
    return () => unsub()
  }, [])

  return days
}
