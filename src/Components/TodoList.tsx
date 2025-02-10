import { ListGroup } from "react-bootstrap";
import { TodoItem } from "../types"
import Todo from "./Todo";


type TodoListProps = {
    todos: TodoItem[];
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
};

export default function TodoList({ todos, toggleComplete, deleteTodo }: TodoListProps) {
  console.log(todos);
  return (
    <ListGroup>
      {todos?.length > 0 ? (
        todos.map((todo: TodoItem) => (
        <ListGroup.Item key={todo.id}>
          <Todo 
            todo={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </ListGroup.Item>
      ))) : (
        <h2 style={{ textAlign: "center", marginTop: '50px', color: "lightgray" }}>
          All caught up! No tasks to do.
        </h2>
      )}
    </ListGroup>
  );
}