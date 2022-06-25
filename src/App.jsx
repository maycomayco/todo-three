import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FormSearch from "./components/FormSearch";
import List from "./components/List";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const LOCAL_STORAGE_KEY = "todo_three";
  // use custom hook to handle local storage
  const [tasks, setTasks] = useLocalStorage(LOCAL_STORAGE_KEY, []);
  const [textSearch, setTextSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.task.value.trim();

    if (!inputValue) return;

    // create a new task object
    const newTask = {
      id: +new Date(),
      name: inputValue,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);

    // cleanup the input
    e.target.task.value = "";
  };

  const inputSearch = useRef(null);

  const handleOnChangeSearch = () => setTextSearch(inputSearch.current.value);

  return (
    <div className="app-wrapper">
      <div className="header">
        <h1>ToDo list</h1>
      </div>
      <Form onSubmit={handleSubmit} />
      <FormSearch inputSearch={inputSearch} onChange={handleOnChangeSearch} />
      <List tasks={tasks} setTasks={setTasks} textSearch={textSearch} />
    </div>
  );
}

export default App;
