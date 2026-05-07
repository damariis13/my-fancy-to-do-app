import { useState, useEffect } from 'react'
import ToDoItem from './components/ToDoItem'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

    const onAddToDo = (text) => {
      setTodos([...todos, {
        id: Date.now(),
        text: text,
        completed: false
      }])
    }


  const onToggleComplete = (id) => {
    setTodos(
      todos.map ((t) => 
      t.id === id ? 
      { ...t, completed: !t.completed }
      : t
      )
    )
  }

  const onDeleteToDo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='bg-white/70 px-8 py-4 rounded-lg'>
        <h1 className="text-5xl text-gray-700 [font-family:'Oleo_Script_Swash_Caps'] mb-6">
          My To Do List
        </h1>
        <TodoForm onAddToDo={onAddToDo} />
         <ul className='mt-4 space-y-3'> 
            {
                todos.map((todo) => (
                  <ToDoItem 
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onDeleteToDo={onDeleteToDo}
                  />
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default App
