import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Matrix from "./components/Matrix";

function App() {
  const [task, setTask] = useState("");
  const [action, setAction] = useState("");
  let [ID, setID] = useState(0);

  const storeData = (e) => {
    localStorage.setItem(
      ID,
      JSON.stringify({
        task: e.target.task.value,
        action: e.target.actions.value,
      })
    );
    setID(ID + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTask(e.target.task.value);
    setAction(e.target.actions.value);

    // console.log(e.target.task.value);
    storeData(e);
    console.log(ID);
  };

  const data = [];

  return (
    <main className="app">
      <Matrix taskTitle={task} action={action} />
      <Form submit={handleSubmit} />
    </main>
  );
}

export default App;
