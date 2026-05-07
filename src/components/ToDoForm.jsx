import { useState } from 'react'

function TodoForm ({ onAddToDo }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== '') {
            onAddToDo(inputValue)
            setInputValue('')
        }
    }

    return (
      <form onSubmit={handleSubmit} className='flex gap-3'>
          <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type='text' 
          placeholder='Add a new task' 
          className='
          flex-1
          font-serif
          px-5
          py-4
          rounded-2xl
          border
          border-pink-200
          bg-white/80
          outline-none
          text-gray-700
          placeholder:text-pink-300
          focus:ring-4
          focus:ring-pink-200'
          />
          <button 
            className='
              font-serif
              px-6
              rounded-2xl
              bg-pink-400
              text-white
              font-medium
              hover:bg-pink-500
              hover:scale-105
              transition-all
              shadow-lg
              border-none
              cursor-pointer
              focus:ring-4
              focus:ring-pink-300
            '
            type='submit'
        >
              Add
          </button>
        </form>
    )
}

export default TodoForm