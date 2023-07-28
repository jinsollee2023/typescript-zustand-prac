import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Todo, todoStore } from "../zustand/store";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const { addTodo } = todoStore();

  const onsubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: nanoid(),
      title,
      contents,
      status: false,
    };
    addTodo(newTodo);
    setTitle("");
    setContents("");
  };
  return (
    <>
      <form onSubmit={onsubmitHandler}>
        <span>제목</span>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <span>내용</span>
        <input
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button>추가</button>
      </form>
    </>
  );
};

export default TodoInput;
