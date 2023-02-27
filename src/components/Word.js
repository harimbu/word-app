import { useState } from 'react'
import {
  MdRadioButtonUnchecked,
  MdCheck,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdDelete,
} from 'react-icons/md'
import { db } from '../firebase'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(word.isShow)
  const [isDone, setIsDone] = useState(word.isDone)

  const docRef = doc(db, 'words', word.id)

  async function toggleShow() {
    await updateDoc(docRef, {
      isShow: !isShow,
    })
    setIsShow(!isShow)
  }

  async function toggleDone() {
    await updateDoc(docRef, {
      isDone: !isDone,
    })
    setIsDone(!isDone)
  }

  async function del() {
    await deleteDoc(doc(db, 'words', word.id))
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
