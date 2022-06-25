import React from "react";

const ListItem = ({ task, onDelete, onThrough }) => {
  return (
    <div className="list-item">
      <p
        className={task.completed ? "completed" : ""}
        onClick={() => onThrough(task.id)}
      >
        {task.name}
      </p>
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
