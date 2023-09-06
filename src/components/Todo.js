import React from "react";

import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ value , removeTodo , completeTodo ,id, isComplete,onEditClick}) => {
  return (
    <div className={isComplete ? "todo-row complete":"todo-row"}>
      <div onClick={()=>completeTodo(id)}>{value}</div>

      <div className="icons">
        <RiCloseCircleLine className="delete-icon"  onClick={()=>removeTodo(id)}/>
        <TiEdit className="edit-icon" onClick={()=>onEditClick({id, value})}/>
      </div>
    </div>
  );
};

export default Todo;
