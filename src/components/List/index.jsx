import React from "react";
import ListItem from "../ListItem";

const List = ({ tasks, setTasks, textSearch }) => {
  const handleDelete = (id) =>
    setTasks((tasks) => tasks.filter((t) => t.id !== id));

  const handleThrough = (id) =>
    setTasks((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  return (
    <div className="list">
      {!tasks?.length && <p>Add any task...</p>}
      {!!tasks?.length && !textSearch ? (
        <>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onThrough={handleThrough}
            />
          ))}
        </>
      ) : (
        <>
          <h4>Filtered list</h4>
          {tasks
            .filter((task) => task.name.includes(textSearch))
            .map((task) => (
              <ListItem
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onThrough={handleThrough}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default List;
