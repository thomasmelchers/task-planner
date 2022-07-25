import React from 'react'
import { MdDone, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { Todo } from '../../interface/todo-models'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoActions: React.FC<Props> = ({todo, todos, setTodos}) => {

    const handleLocation = 
        (   id: number, 
            location: "unStarted" | "inProgress" | "todo" | "completed" , 
            newLocation: "unStarted" | "inProgress" | "todo" | "completed" ) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id? 
                    todo.location === location?
                        { ...todo, location: newLocation } :
                        todo
                : todo       
            )
        )
    }

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id? 
                    todo.location === 'inProgress'?
                        { ...todo, isDone: !todo.isDone, location: 'completed' } :
                        {...todo, isDone: !todo.isDone, location: 'inProgress'}
                : todo       
            )
        )
    }

  return (
    <>
        { (todo.location === 'unStarted') &&
                    <span className='icon' onClick={() => handleLocation(todo.id, "unStarted", "todo") }> 
                        <MdAddCircle /> 
                    </span>
                    }

                    { (todo.location === 'todo') &&
                    <span className='icon' onClick={() => handleLocation(todo.id, "todo", "inProgress") }> 
                        <BsFillCaretRightFill /> 
                    </span>
                    }

                    { (todo.location === 'inProgress' || todo.location === 'completed') &&
                    <span className='icon' onClick={() => handleDone(todo.id) }> 
                        <MdDone /> 
                    </span>
                    }
                    
                    { (todo.location === 'todo') &&
                    <span className='icon' onClick={() => handleLocation(todo.id, "todo", "unStarted") }> 
                        <MdRemoveCircle/> 
                    </span>
                    }

                    { (todo.location === 'inProgress') &&
                    <span className='icon' onClick={() => handleLocation(todo.id, "inProgress", "todo") }> 
                        <MdRemoveCircle/> 
                    </span>
                    }
    </>
  )
}

export default TodoActions