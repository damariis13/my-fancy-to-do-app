import { Trash2 } from 'lucide-react'

function ToDoItem ({ todo, onToggleComplete, onDeleteToDo }) {
    return (
                <li
                    className='
                    flex
                    items-center
                    font-serif
                    px-5
                    py-3
                    rounded-lg
                    bg-pink-50
                    text-gray-700
                    shadow-sm
                    '
                >
                    <input 
                    type='checkbox' 
                    className='mr-3 w-5 h-5 text-pink-400 rounded focus:ring-pink-300' 
                    checked={todo.completed} 
                    onChange={() => onToggleComplete(todo.id)}
                    />
                    <span
                    className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
                    >
                    {todo.text}
                    </span>
                    <button
                    onClick={() => onDeleteToDo(todo.id)}
                    className='
                        ml-auto
                        p-2
                        rounded-full
                        hover:bg-pink-100
                        transition-all
                        cursor-pointer
                    '
                    >
                    <Trash2
                        size={18}
                        className='text-pink-400 hover:text-pink-500'
                    />
                    </button>
                </li>
    )
}

export default ToDoItem