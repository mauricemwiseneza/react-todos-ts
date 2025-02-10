import './App.css'
import { defaultTodos } from './data';
import TodoList from './Components/TodoList';
import { Button, Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { TodoItem } from './types';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [todos, setTodos] = useState(defaultTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    const todo: TodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => (
      todo.id !== id
    ));
    setTodos(updatedTodos);
  }

  return (
    <div className='container'>
      {showAlert && (
        <Alert 
          variant='danger'
          style={{marginTop: '10px'}}
          onClose={() => setShowAlert(false)}
          dismissible
        > 
        <p>Please enter a task before adding it to the list! The task cannot be empty.</p>
        </Alert>
      )}
      <h1>Todo App Example</h1>
      <Form.Control 
        type = 'text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Enter new todo'
      />
      <Button className='mt-2 mb-2' onClick={addTodo}>
        Add Todo
      </Button>
      <TodoList 
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        />
    </div>
  )
}

export default App
