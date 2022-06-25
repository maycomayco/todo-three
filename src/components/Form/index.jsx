import React from "react";

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <input type="text" name="task" placeholder="Add task..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
