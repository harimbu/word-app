import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function WriteWord() {
  const navigate = useNavigate()
  const days = useFetch('http://localhost:3001/days')
  const engRef = useRef()
  const korRef = useRef()
  const dayRef = useRef()

  function write(e) {
    e.preventDefault()

    fetch('http://localhost:3001/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eng: engRef.current.value,
        kor: korRef.current.value,
        day: dayRef.current.value,
        isDone: false,
        isShow: false,
      }),
    }).then(res => {
      if (res.ok) {
        navigate(`/word-list/${dayRef.current.value}`)
      }
    })
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
