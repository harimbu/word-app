import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function WriteDay() {
  const days = useFetch('http://localhost:3001/days')
  const navigate = useNavigate()

  function addDay() {
    fetch('http://localhost:3001/days', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        navigate(`/`)
      }
    })
  }

  return (
    <div className="container">
      <h2 className="title">날짜 추가</h2>
      <div className="message">현재 날짜는 {days.length}일 입니다.</div>
      <button onClick={addDay}>추가하기</button>
    </div>
  )
}
