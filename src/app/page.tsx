'use client'

import { useState } from 'react'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Main from './components/Main'
import Modal from './components/Modal'

interface Todo {
  text: string
  isLiked: boolean
  isUserModalOpen: boolean
}

export default function Home() {
  const [modalView, setModalView] = useState(false)
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const modalVisibility = () => {
    if (modalView === true) {
      return true
    }
    return false
  }

  const disabled = () => {
    if (value === '' || value === undefined) {
      return true
    }
    return false
  }

  return (
    <body
      className={`bg-stone-950 w-screen min-h-screen max-h-full flex overflow-x-hidden ${
        modalView ? ' overflow-hidden' : ' overflow-y-auto'
      }`}
    >
      <Modal
        todos={todos}
        setTodos={setTodos}
        value={value}
        setValue={setValue}
        modalVisibility={modalVisibility()}
        toggleActive={() => setModalView(!modalView)}
        disabledButtons={disabled()}
      />
      <Aside toggleActive={() => setModalView(!modalView)} />
      <Main
        todos={todos}
        setTodos={setTodos}
        value={value}
        setValue={setValue}
        disabledButtons={disabled()}
      />
      <Footer />
    </body>
  )
}
