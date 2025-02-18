import "./App.css";

import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NewTodoItem, TodoItem } from "./types";
import { useEffect, useState } from "react";

import TodoList from "./Components/TodoList"

const BASE_URL = "https://679bb0c733d316846324c8eb.mockapi.io/todo";

function App() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [todos, setTodos] = useState<TodoItem[]>([]);

  //API reques to retreive all todos
  const getTodos = async () => {
    setLoading(true); 
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); //set loading to false after the response
    }
  };

  //API request to add a new todo
  const addTodo = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!newTodo) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false); 
    setLoading(true); 
    const todo: NewTodoItem = {
      title: newTodo,
      completed: false,
    };

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      await response.json(); 
      await getTodos(); 
      setNewTodo(""); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  //API request to get a single todo
  const getTodo = async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  //API request to update the status of a todo
  const toggleComplete = async (id: string) => {
    setLoading(true); 
    const todo = await getTodo(id); 

    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...todo, completed: !todo.completed }), 
      });
      await getTodos(); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  //API request to delete a todo
  const deleteTodo = async (id: string) => {
    setLoading(true);
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      await getTodos(); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      {showAlert && (
        <Alert
          variant="danger"
          style={{ marginTop: "15px" }}
          onClose={() => setShowAlert(false)}
          dismissible
        >
        
          <p>
            Please enter a task before adding it to the list! The task cannot be
            empty.
          </p>
        </Alert>
      )}
      <h1>Todo App Example</h1>
      <form onSubmit={addTodo}>
        <Form.Control
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <Button type="submit" className="mt-2 mb-2">
          Add Todo
        </Button>
        {loading ? (
          <div className="spinner-container">
            <Spinner variant="primary" />
          </div>
        ) : (
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        )}
      </form>
    </div>
  );
}

export default App;
