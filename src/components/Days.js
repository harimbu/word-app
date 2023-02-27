import { Link } from 'react-router-dom'
import useDay from '../hooks/useDay'

export default function Days() {
  const days = useDay()

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
