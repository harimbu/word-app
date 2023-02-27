import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import useDay from '../hooks/useDay'

export default function WriteDay() {
  const days = useDay()
  const navigate = useNavigate()

  async function addDay() {
    await addDoc(collection(db, 'days'), {
      day: days.length + 1,
    })
    navigate(`/`)
  }

  return (
    <div className="container">
      <h2 className="title">날짜 추가</h2>
      <div className="message">현재 날짜는 {days.length}일 입니다.</div>
      <button onClick={addDay}>추가하기</button>
    </div>
  )
}
