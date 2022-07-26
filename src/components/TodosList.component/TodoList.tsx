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
                Active Sprint
              </span>

              {todos.map((todo) => ( (todo.location === 'todo') &&
                <SingleTodo 
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                  />)
                )
              }
            </div>

            <div className="todos inProgress" >
              <span className='todos__heading'> 
                In Progress Tasks
              </span>

              {todos.map((todo) => ( (todo.location === 'inProgress') &&
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

          <div className="todos unStarted">
            <span className='todos__heading'> 
              BackLog
            </span>

            {todos.map((todo) => ( (todo.location === "unStarted") &&
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