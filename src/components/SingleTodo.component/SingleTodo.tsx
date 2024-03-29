import React, { useState, useRef, useEffect } from 'react'
import './SingleTodo.css'
import { Todo } from '../../interface/todo-models'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import TodoActions from '../TodoActions.component/TodoActions'


type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


    // FILTER FUNCTION : if the id of the selected item is different of the id of other item then it keep the last item
    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => 
                todo.id !== id )
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


    // Focus when the text is edit. If not the user need to add the cursor in it
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

  return (
        <>
        <form 
            className='todos__single' 
            onSubmit={(e) => handleSubmit(e, todo.id)}
            >
                <div className='todos__single__title-container'>
            {/* edit = true */}
            {edit? (

                <input 
                    ref={inputRef}
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

                    <TodoActions todo={todo} todos={todos} setTodos={setTodos} />            
                    
                    <span 
                        className='icon icon-brown' 
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
                
                    <span className='icon icon-grey' onClick={() => handleDelete(todo.id) }> 
                        <AiFillDelete /> 
                    </span>

                </div>
            </div>
                <div className='todos__single__info-container'>
                    <div className='todos__single__info--text'><p className='todos__single__info__type'>{todo.type}</p></div>
                    <div className='todos__single__info--text technology'><p className='todos__single__info__technology'>{todo.technology}</p></div>
                    <div className='todos__single__info--text storyPoint'><p className='todos__single__info__storyPoint'>{todo.storyPoint}</p></div>
                </div>
            </form>
            
            
        </>
  )
}

export default SingleTodo