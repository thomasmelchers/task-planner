import React, { useState } from 'react'
import './SingleTodo.css'
import { Todo } from '../../interface/todo-models'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'



type Props = {
    todo: Todo,
    key: number,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, key, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string | number>(todo.todo);

    // FILTER FUNCTION : if the id of the selected item is different of the id of other item then it keep the last item
    const handleHello = (id: number) => {
        setTodos(
            todos.filter((todo) => 
                todo.id !== id )
        )
    }

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id? 
                    { ...todo, isDone: !todo.isDone } : 
                    todo 
            )
        )
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id? 
                 {...todo, todo: editTodo} : 
                 todo
            ))
        )
        setEdit(false);
    }

    console.log(edit)
  return (
    <form className='todos__single' onSubmit={(e) => handleSubmit(e, todo.id)}>

    {/* edit = true */}
    {edit? (

        <input 
            value={editTodo}  
            onChange={(e) => setEditTodo(e.target.value)}
            className='todos__single--text'
            />
    ):

    (
        todo.isDone? (
            <s className='todos__single--text'>{todo.todo}</s>
        ): (

            <span className='todos__single--text'>{todo.todo}</span>
        )) 
    
    }
  
        <div>
            <span 
                className='icon' 
                onClick= { () => 
                    {
                        // if edit = false && isDone = false => edit = true
                        if(!edit && !todo.isDone) {
                            setEdit(!edit)
                        }
                    }  
                }
            > 
                <AiFillEdit /> 
            </span>
            
            <span className='icon' onClick={() => handleHello(todo.id) }> 
                <AiFillDelete /> 
            </span>
            
            <span className='icon' onClick={() => handleDone(todo.id) }> 
                <MdDone /> 
            </span>
        </div>
    </form>
  )
}

export default SingleTodo