import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Days() {
  const days = useFetch('http://localhost:3001/days')

  return (
    <div className="days">
      {days.map(day => (
        <Link to={`/word-list/${day.day}`} key={day.id}>
          {day.day} 일
        </Link>
      ))}
    </div>
  )
}
