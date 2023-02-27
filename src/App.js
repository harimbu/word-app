import React from 'react'
import Days from './components/Days'
import Header from './components/Header'
import WordList from './components/WordList'
import WriteDay from './components/WriteDay'
import WriteWord from './components/WriteWord'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/word-list/:day" element={<WordList />} />
          <Route path="/write-day" element={<WriteDay />} />
          <Route path="/write-word" element={<WriteWord />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
