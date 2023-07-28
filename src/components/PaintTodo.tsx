import { todoStore } from "../zustand/store";
import TodoCard from "./TodoCard";

const PaintTodo = () => {
  const { todos } = todoStore();
  console.log(todos);

  return (
    <>
      <p>진행중</p>
      {todos
        .filter((todo) => todo.status === false)
        .map((todo) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })}
      <p>완료</p>
      {todos
        .filter((todo) => todo.status === true)
        .map((todo) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })}
    </>
  );
};

export default PaintTodo;
