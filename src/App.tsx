import './App.css'
import { defaultTodos } from './data';
import TodoList from './Components/TodoList';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const addTodo = () => {
    const newTodo = {
      id: todos.length +1,
      title: 'New Todo',
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo)) 
  }

  return (
    <div className='container'>
      <h1>Todo App Example</h1>
      <Button className='mt-2 mb-2' onClick={addTodo}>
        Add Todo
      </Button>
      <TodoList todos={todos} />
    </div>
  )
}

export default App
