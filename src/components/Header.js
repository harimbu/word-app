import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1 className="title">
        <Link to={'/'}>👩 단어장</Link>
      </h1>
      <Link to={'/write-day'}>
        <button>날짜추가</button>
      </Link>
      <Link to={'write-word'}>
        <button>단어추가</button>
      </Link>
    </header>
  )
}
