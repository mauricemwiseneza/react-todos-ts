import { ListGroup } from "react-bootstrap";
import { TodoItem } from "../types"
import Todo from "./Todo";


type TodoListProps = {
    todos: TodoItem[];
    toggleComplete: (id: number) => void;
};

export default function TodoList({ todos, toggleComplete }: TodoListProps) {
  console.log(todos);
  return (
    <ListGroup>
      {todos.map((todo: TodoItem) => (
        <ListGroup.Item key={todo.id}>
          <Todo 
            todo={todo} 
            toggleComplete={toggleComplete}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}