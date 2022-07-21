import React from 'react'
import { Todo } from '../../interface/todo-models';
import './TodoList.css';
import SingleTodo from '../SingleTodo.component/SingleTodo';


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    

    <div className='container'>

      {/* Droppable area is the area where we can drop an element. Dropable area need to have an ID */}

            <div className="todos" >
              <span className='todos__heading'> 
                Active Tasks
              </span>

              {todos.map((todo) => ( (todo.isDone === false) &&
                <SingleTodo 
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                  />)
                )
              }
            </div>

          <div className="todos completed">
            <span className='todos__heading'> 
              Completed Tasks
            </span>

            {todos.map((todo) => ( (todo.isDone === true) &&
                <SingleTodo 
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                />)
              )
            }
          </div>
    </div>    
  )
}

export default TodoList