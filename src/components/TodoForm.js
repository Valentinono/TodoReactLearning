import React from "react";

const CostumeForm = ({
  placeholder,
  name,
  className,
  value,
  onChange,
  buttonClassName,
  buttonOnClick,
  buttonBody,
}) => {
  return (
    <>
      <div className="todo-form">
        <input
          name={name}
          placeholder={placeholder}
          className={className}
          value={value}
          onChange={onChange}
        />
        <button className={buttonClassName} onClick={buttonOnClick}>
          {buttonBody}
        </button>
      </div>
    </>
  );
};
const TodoForm = ({ addTodo, setInputValue, inputValue, todoToEdit ,editTodo}) => {
  return (
    <div className="todo-form">
        {todoToEdit.id===null ?
      <CostumeForm
        placeholder={"Add todo"}
        name="text"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        buttonBody="add todo"
        buttonClassName="todo-button"
        buttonOnClick={() => addTodo(inputValue)}
      /> :
      <CostumeForm
      placeholder={"Edit todo"}
      name="text"
      className="todo-input edit"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      buttonBody="Edit"
      buttonClassName="todo-button edit"
      buttonOnClick={() => editTodo()}
    />
        }
    </div>
  );
};

export default TodoForm;
