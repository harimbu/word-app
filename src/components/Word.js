import { useState } from 'react'
import {
  MdRadioButtonUnchecked,
  MdCheck,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdDelete,
} from 'react-icons/md'

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(word.isShow)
  const [isDone, setIsDone] = useState(word.isDone)
  const [screen, setScreen] = useState(false)

  function toggleShow() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isShow: !isShow,
      }),
    }).then(res => {
      if (res.ok) {
        setIsShow(!isShow)
      }
    })
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone)
      }
    })
  }

  function del() {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          setScreen(true)
        }
      })
    }
  }

  if (screen) {
    return null
  }

  return (
    <tr className={isDone ? 'done' : ''}>
      <td onClick={toggleDone}>
        {isDone ? <MdCheck /> : <MdRadioButtonUnchecked />}
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td onClick={toggleShow}>
        {isShow ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
      </td>
      <td onClick={del}>
        <MdDelete />
      </td>
    </tr>
  )
}
