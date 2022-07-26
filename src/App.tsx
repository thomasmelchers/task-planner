import React, { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields.component/InputFields';
import TodoList from './components/TodosList.component/TodoList';
import { Todo } from './interface/todo-models';

const App: React.FC = () => { // React.FC => functionnal component

  const [todo, setTodo] = useState<string>("");
  const [storyPoint, setStoryPoint] = useState<number | undefined>(0.5);
  const [technology, setTechnology] = useState< string>("React");
  const [type, setType] = useState<string>("Learning");
console.log(technology)
  const [todos, setTodos] = useState<Todo[]>([]);


  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false, location: "unStarted", storyPoint, technology, type } ])
      setTodo("");
      setStoryPoint(0);
    }
  }

  return (

      <div className="App">
        <span className="heading">Task Planner</span>

        <InputFields 
          todo={todo} 
          setTodo={setTodo} 
          storyPoint={storyPoint} 
          setStoryPoint={setStoryPoint} 
          technology={technology}
          setTechnology={setTechnology}
          type={type}
          setType={setType}
          handleAdd={handleAdd}
        />
        
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
        />
      </div>

  );
}

export default App;
