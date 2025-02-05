import './App.css'
import { defaultTodos } from './data';
import TodoList from './Components/TodoList';
import { Button } from 'react-bootstrap';

function App() {


  return (
    <div className='container'>
      <h1>Todo App Example</h1>
      <Button className='mt-2 mb-2'>
        Add Todo
      </Button>
      <TodoList todos={defaultTodos} />
    </div>
  )
}

export default App
