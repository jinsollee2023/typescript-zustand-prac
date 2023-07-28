import { Todo, todoStore } from "../zustand/store";

interface Props {
  todo: Todo;
}

const TodoCard = ({ todo }: Props) => {
  const { updateTodo, deleteTodo } = todoStore();

  const toggleBtnHandler = (id: string) => {
    updateTodo(id);
  };

  const deleteBtnHandler = (id: string) => {
    deleteTodo(id);
  };
  return (
    <>
      <div style={{ border: "1px solid red", margin: "10px" }}>
        <p>{todo.title}</p>
        <p>{todo.contents}</p>
        <button onClick={() => toggleBtnHandler(todo.id)}>
          {todo.status === false ? "완료" : "취소"}
        </button>
        <button
          onClick={() => {
            deleteBtnHandler(todo.id);
          }}
        >
          삭제하기
        </button>
      </div>
    </>
  );
};

export default TodoCard;
