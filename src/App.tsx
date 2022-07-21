import React, { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields.component/InputFields';
import TodoList from './components/TodosList.component/TodoList';
import { Todo } from './interface/todo-models';

const App: React.FC = () => { // React.FC => functionnal component

  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false, location: "unStarted" } ])
      setTodo("");
    }
    console.log(todos)
  }

  return (

      <div className="App">
        <span className="heading">Task Planner</span>

        <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>

  );
}

export default App;
