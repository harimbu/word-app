import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useDay from '../hooks/useDay'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function WriteWord() {
  const navigate = useNavigate()
  const days = useDay()
  const engRef = useRef()
  const korRef = useRef()
  const dayRef = useRef()

  async function write(e) {
    e.preventDefault()

    await addDoc(collection(db, 'words'), {
      eng: engRef.current.value,
      kor: korRef.current.value,
      day: Number(dayRef.current.value),
      isDone: false,
      isShow: true,
      date: serverTimestamp(),
    })
    navigate(`/word-list/${dayRef.current.value}`)
  }

  return (
    <div className="container">
      <h2 className="title">단어 추가</h2>
      <form className="form">
        <label>영어</label>
        <input type="text" placeholder="eng" ref={engRef} />

        <label>한국어</label>
        <input type="text" placeholder="kor" ref={korRef} />

        <label>날짜</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option value={day.day} key={day.id}>
              {day.day}
            </option>
          ))}
        </select>

        <button onClick={write}>추가하기</button>
      </form>
    </div>
  )
}
