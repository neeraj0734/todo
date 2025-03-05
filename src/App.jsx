import React from 'react'
import TodoInput from './Component/TodoInput'
import { List } from 'lucide-react'

const App = () => {
  
  return (
    <>
      <div className="outer w-full min-h-screen flex flex-col items-center bg-gray-300 rounded-2xl">
        <TodoInput/>
      </div>
    </>
  )
}

export default App