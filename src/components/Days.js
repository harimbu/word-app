import { Link } from 'react-router-dom'
import useDays from '../hooks/useDays'

export default function Days() {
  const days = useDays()

  return (
    <div className="days">
      {days.map(day => (
        <Link to={`/word-list/${day.day}`} key={day.id}>
          {day.day} 일
        </Link>
      ))}
    </div>y
  )
}
